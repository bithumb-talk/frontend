import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import coinPriceReducer from './coinPriceSlice';
import userInfoSlice from './userInfoSlice';
import rootSaga from './coinPriceSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = () => {
  const setStore = configureStore({
    reducer: {
      coinPrice: coinPriceReducer,
      userInfo: userInfoSlice,
    },
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      sagaMiddleware,
    ],
  });

  sagaMiddleware.run(rootSaga);

  return setStore;
};

// export const store = configureStore({
//   reducer: {
//     coinPrice: coinPriceReducer,
//     userInfo: userInfoSlice,
//   },
// });
