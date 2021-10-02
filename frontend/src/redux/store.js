import { configureStore } from '@reduxjs/toolkit';
import coinPriceReducer from './coinPriceSlice';
import userInfoSlice from './userInfoSlice';

export const store = configureStore({
  reducer: {
    coinPrice: coinPriceReducer,
    userInfo: userInfoSlice,
  },
});
