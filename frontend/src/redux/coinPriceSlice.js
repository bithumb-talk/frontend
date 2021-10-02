import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
// import api from '@/api/api';
import { INITIAL_STATUS, SORT_STATUS } from '@/constants/reduxConstants';
import { testGetCoinInterestsList, testGetCoinPriceList } from '@/mock/coinListMockData';
import { copy, includeKor, includeEng } from '@/utils/utils';

const initialState = {
  tabIndex: 0,
  coinPriceList: {
    data: null,
    ...INITIAL_STATUS,
  },
  filteredCoinPriceList: {
    data: null,
  },
  nameStatus: {
    ...SORT_STATUS,
  },
};

/* eslint max-len: ["error", { "code": 150 }] */
export const getCoinPriceList = createAsyncThunk('coinPrice/getCoinPriceList', async () => {
  // const res = await api.getCoinList();
  const [priceRes, interestsRes] = await Promise.all([await testGetCoinPriceList(), await testGetCoinInterestsList()]);
  // console.log(priceRes);
  // console.log(interestsRes);
  const newCoinPriceList = priceRes.data.map((coin) => {
    const { korean } = coin;

    const isEqual = interestsRes.data.some(({ korean: interestKorean }) => korean === interestKorean);

    return {
      ...coin,
      isInterest: isEqual,
    };
  });

  return {
    ...priceRes,
    data: [...newCoinPriceList],
  };
});

export const coinPriceSlice = createSlice({
  name: 'coinPrice',
  initialState,
  reducers: {
    setTabIndex: (state, action) => {
      const { value } = action.payload;
      state.tabIndex = value;
    },
    setSordStatus: (state, action) => {
      const { isSortByDescending, statusName } = state.nameStatus;
      const { type } = action.payload;

      state.nameStatus.isSortByDescending = isSortByDescending === 1 ? -1 : 1;

      if (type !== statusName) {
        state.nameStatus.isSortByDescending = -1;
      }

      state.nameStatus.statusName = type;

      const newData = copy(state.coinPriceList.data);
      newData.sort((prev, next) => {
        const prevValue = type === 'korean' ? prev[type] : Number(prev[type]);
        const nextValue = type === 'korean' ? next[type] : Number(next[type]);
        if (prevValue > nextValue) return 1 * state.nameStatus.isSortByDescending;
        if (prevValue < nextValue) return -1 * state.nameStatus.isSortByDescending;
        return 0;
      });
      state.filteredCoinPriceList.data = newData;
    },
    setSearchedCoin: (state, action) => {
      const { value } = action.payload;

      if (value === '') {
        state.filteredCoinPriceList.data = state.coinPriceList.data;
        return;
      }

      const filteredNewData = state.coinPriceList.data.filter(
        ({ korean, symbol }) => includeKor(korean, value) || includeEng(symbol, value),
      );

      state.filteredCoinPriceList.data = filteredNewData;
    },
  },
  extraReducers: {
    [getCoinPriceList.pending]: (state) => {
      state.coinPriceList = {
        ...state.coinPriceList,
        isLoading: true,
        isError: false,
        status: 'loading',
      };
    },
    [getCoinPriceList.fulfilled]: (state, action) => {
      state.coinPriceList = {
        ...state.coinPriceList,
        data: action.payload.data,
        isLoading: false,
        isError: false,
        status: 'success',
      };
      state.filteredCoinPriceList.data = action.payload.data;
    },
    [getCoinPriceList.rejected]: (state) => {
      state.coinPriceList = {
        ...state.coinPriceList,
        isLoading: false,
        isError: true,
        status: 'fail',
      };
    },
  },
});

export const { setTabIndex, setSordStatus, setSearchedCoin } = coinPriceSlice.actions;

export default coinPriceSlice.reducer;
