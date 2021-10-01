import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
// import api from '@/api/api';
import { INITIAL_STATUS } from '@/constants/reduxConstants';
import { testGetCoinPriceList } from '@/mock/coinListMockData';

const initialState = {
  tabIndex: 0,
  coinPriceList: {
    data: null, // data null issue ㅜㅜㅜ
    ...INITIAL_STATUS,
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
  },
  extraReducers: {
    [getCoinPriceList.pending]: (state) => {
      state.coinPriceList.isLoading = true;
      state.coinPriceList.status = 'loading';
    },
    [getCoinPriceList.fulfilled]: (state, action) => {
      state.coinPriceList.isLoading = false;
      state.coinPriceList.data = action.payload.data;
      state.coinPriceList.status = 'success';
    },
    [getCoinPriceList.rejected]: (state) => {
      state.coinPriceList.isLoading = false;
      state.coinPriceList.isError = true;
      state.coinPriceList.status = 'fail';
    },
  },
});

export const { setTabIndex } = coinPriceSlice.actions;

export default coinPriceSlice.reducer;
