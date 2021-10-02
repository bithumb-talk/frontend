import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
// import api from '@/api/api';
import { INITIAL_STATUS, SORT_STATUS } from '@/constants/reduxConstants';
import { testGetCoinPriceList } from '@/mock/coinListMockData';
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

export const getCoinPriceList = createAsyncThunk('coinPrice/getCoinPriceList', async () => {
  // const res = await api.getCoinList();
  const res = await testGetCoinPriceList();
  return res;
});

export const coinPriceSlice = createSlice({
  name: 'coinPrice',
  initialState,
  reducers: {
    setTabIndex: (state, action) => {
      state.tabIndex = action.payload;
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

      console.log(value);

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
