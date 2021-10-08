import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  getCoinPriceList,
  setSordStatus,
  editInterestCoin,
  postInterestCoin,
  deleteInterestCoin,
  setTabIndex,
  setSearchedCoin,
  getCandleStick,
} from '@/redux/coinPriceSlice';

/* eslint max-len: ["error", { "code": 150 }] */
function useCoin() {
  const dispatch = useDispatch();

  const onGetCoinPriceList = useCallback(() => dispatch(getCoinPriceList()), [dispatch]);

  const onSetSordStatus = useCallback((paylod) => dispatch(setSordStatus(paylod)), [dispatch]);

  const onEditInterestCoin = useCallback((payload) => dispatch(editInterestCoin(payload)), [dispatch]);

  const onPostInterestCoin = useCallback((payload) => dispatch(postInterestCoin(payload)), [dispatch]);

  const onDeleteInterestCoin = useCallback((payload) => dispatch(deleteInterestCoin(payload)), [dispatch]);

  const onSetTabIndex = useCallback((payload) => dispatch(setTabIndex(payload)), [dispatch]);

  const onSetSearchedCoin = useCallback((payload) => dispatch(setSearchedCoin(payload)), [dispatch]);

  const onGetCandleStick = useCallback((payload) => dispatch(getCandleStick(payload)), [dispatch]);

  return {
    onGetCoinPriceList,
    onSetSordStatus,
    onEditInterestCoin,
    onPostInterestCoin,
    onDeleteInterestCoin,
    onSetTabIndex,
    onSetSearchedCoin,
    onGetCandleStick,
  };
}

export default useCoin;
