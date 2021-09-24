import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tabIndex: 0,
};

export const coinPriceSlice = createSlice({
  name: 'coinPrice',
  initialState,
  reducers: {
    setTabIndex: (state, action) => {
      state.tabIndex = action.payload;
    },
  },
});

export const { setTabIndex } = coinPriceSlice.actions;

export default coinPriceSlice.reducer;
