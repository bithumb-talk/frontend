import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATUS, SORT_STATUS } from '@/constants/reduxConstants';
import { copy, includeKor, includeEng, getItem } from '@/utils/utils';
import api from '@/api/api';
import { setNewDataWithSymbol } from '@/utils/reduxUtils';
import { authUserId } from '@/utils/auth';

const initialState = {
  tabIndex: 0,
  selectedCoin: '',
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
  candleStickTimeDataList: {
    data: null,
    ...INITIAL_STATUS,
  },
  coinPriceDetailInfo: {
    data: null,
  },
};

/* eslint max-len: ["error", { "code": 150 }] */
export const getCoinPriceList = createAsyncThunk('coinPrice/getCoinPriceList', async () => {
  if (getItem('token')) {
    const [priceRes, interestsRes] = await Promise.all([
      await api.getCoinList(),
      await api.getInterest(getItem('id'), {
        headers: {
          Authorization: `Bearer ${getItem('token')}`,
        },
      }),
    ]);

    const newCoinPriceList = priceRes.data.data.map((coin) => {
      const { korean } = coin;

      const isEqual = interestsRes.data.data.some(({ korean: interestKorean }) => korean === interestKorean);

      return {
        ...coin,
        isInterest: isEqual,
      };
    });

    return {
      ...priceRes,
      data: [...newCoinPriceList],
    };
  }

  const onlyPriceRes = await api.getCoinList();
  const onlyNewCoinPriceList = onlyPriceRes.data.data.map((coin) => ({
    ...coin,
    isInterest: false,
  }));

  return {
    ...onlyPriceRes,
    data: [...onlyNewCoinPriceList],
  };
});

export const getCandleStick = createAsyncThunk('coinPrice/getCandleStick', async ({ symbol, gap }) => {
  const { data: originalData } = await api.getCandleStick({ symbol, gap });

  const newData = originalData.data.map(({ baseTime, openPrice, closePrice, highPrice, lowPrice }) => [
    Number(baseTime),
    Number(openPrice),
    Number(highPrice),
    Number(lowPrice),
    Number(closePrice),
  ]);

  return {
    ...originalData,
    data: newData,
  };
});

export const postInterestCoin = createAsyncThunk('coinPrice/postInterestCoin', async ({ symbol }) => {
  const { data } = await api.postInterestCoin({ symbol, userId: authUserId });

  return {
    data: data.data,
  };
});

export const deleteInterestCoin = createAsyncThunk('coinPrice/deleteInterestCoin', async ({ symbol }) => {
  const { data } = await api.deleteInterestCoin({ symbol, userId: authUserId });

  return {
    data: data.data,
  };
});

export const coinPriceSlice = createSlice({
  name: 'coinPrice',
  initialState,
  reducers: {
    setTabIndex: (state, action) => {
      const { value } = action.payload;
      state.tabIndex = value;

      if (state.coinPriceList.status !== 'success') return;

      if (value === 1) {
        state.filteredCoinPriceList.data = state.filteredCoinPriceList.data.filter(({ isInterest }) => isInterest);
        return;
      }
      state.filteredCoinPriceList.data = [...state.coinPriceList.data];
    },
    setSordStatus: (state, action) => {
      const { isSortByDescending, statusName } = state.nameStatus;
      const { type } = action.payload;

      state.nameStatus.isSortByDescending = isSortByDescending === 1 ? -1 : 1;

      if (type !== statusName) {
        state.nameStatus.isSortByDescending = -1;
      }

      state.nameStatus.statusName = type;
      let newData;

      if (state.tabIndex === 0) {
        newData = copy(state.coinPriceList.data);
      } else {
        newData = copy(state.filteredCoinPriceList.data);
      }

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

      const targetData = state.tabIndex === 0 ? state.coinPriceList.data : state.filteredCoinPriceList.data;

      if (value === '') {
        state.filteredCoinPriceList.data = [...targetData];
        return;
      }

      const filteredNewData = targetData.filter(
        ({ korean, symbol }) => includeKor(korean, value) || includeEng(symbol, value),
      );

      state.filteredCoinPriceList.data = [...filteredNewData];
    },
    editInterestCoin: (state, action) => {
      const { symbol: payloadSymbol, isInterest: payloadIsInterest } = action.payload;

      const selectedCoin = state.filteredCoinPriceList.data.find(({ symbol }) => payloadSymbol === symbol);

      const newSelectedCoin = {
        ...selectedCoin,
        isInterest: !payloadIsInterest,
      };

      const newData = state.filteredCoinPriceList.data.map((coin) => {
        if (payloadSymbol === coin.symbol) {
          return {
            ...newSelectedCoin,
          };
        }
        return {
          ...coin,
        };
      });

      const newOriginalData = state.coinPriceList.data.map((coin) => {
        if (payloadSymbol === coin.symbol) {
          return {
            ...newSelectedCoin,
          };
        }
        return {
          ...coin,
        };
      });

      state.filteredCoinPriceList.data = [...newData];
      state.coinPriceList.data = [...newOriginalData];
    },
    updateCoinList: (state, action) => {
      const { data: payloadData } = action.payload;
      const { data } = state.coinPriceList;
      if (!data) return;
      const copiedData = copy(data);
      const newData = setNewDataWithSymbol({ payloadData, copiedData });
      state.coinPriceList.data = [...newData];
      const { data: filteredData } = state.filteredCoinPriceList;
      if (!filteredData) return;
      const filteredCopiedData = copy(filteredData);
      const newFilteredData = setNewDataWithSymbol({
        payloadData,
        copiedData: filteredCopiedData,
      });

      state.filteredCoinPriceList.data = [...newFilteredData];
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

    [getCandleStick.pending]: (state) => {
      state.candleStickTimeDataList = {
        ...state.candleStickTimeDataList,
        isLoading: true,
        isError: false,
        status: 'loading',
      };
    },
    [getCandleStick.fulfilled]: (state, action) => {
      state.candleStickTimeDataList = {
        ...state.candleStickTimeDataList,
        data: action.payload.data,
        isLoading: false,
        isError: false,
        status: 'success',
      };
    },
    [getCandleStick.rejected]: (state) => {
      state.candleStickTimeDataList = {
        ...state.candleStickTimeDataList,
        isLoading: false,
        isError: true,
        status: 'fail',
      };
    },
  },
});

export const {
  setTabIndex,
  setSordStatus,
  setSearchedCoin,
  editInterestCoin,
  setSelectedCoin,
  updateCoinList,
} = coinPriceSlice.actions;

export default coinPriceSlice.reducer;
