import { configureStore } from '@reduxjs/toolkit';
import coinPriceReducer from './coinPriceSlice';

export const store = configureStore({
  reducer: { coinPrice: coinPriceReducer },
});
