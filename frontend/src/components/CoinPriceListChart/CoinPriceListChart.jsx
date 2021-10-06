import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoinPriceList } from '@/redux/coinPriceSlice';
import auth from '@/utils/auth';
import CoinSearchSection from './CoinSearchSection';
import CoinPriceListTab from './CoinPriceListTab';
import CoinPriceList from './CoinPriceList';
import {
  CoinPriceListContainer,
} from './CoinPriceListChart.style';
import CoinPriceFilterTab from './CoinPriceFilterTab';
import CoinLogin from './CoinLogin';

function CoinPriceListChart() {
  const dispatch = useDispatch();
  const { tabIndex } = useSelector((state) => state.coinPrice);

  useEffect(() => {
    dispatch(getCoinPriceList());
  }, [dispatch]);

  return (
    <>
      <CoinPriceListContainer>
        <section>
          <CoinSearchSection />
          <CoinPriceListTab />
          <CoinPriceFilterTab />
        </section>
        {
          tabIndex === 1 && !auth.isLogin()
            ? <CoinLogin />
            : <CoinPriceList />
        }
      </CoinPriceListContainer>
    </>
  );
}

export default CoinPriceListChart;
