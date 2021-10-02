import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCoinPriceList } from '@/redux/coinPriceSlice';
import CoinSearchSection from './CoinSearchSection';
import CoinPriceListTab from './CoinPriceListTab';
import CoinPriceList from './CoinPriceList';
import {
  CoinPriceListContainer,
} from './CoinPriceListChart.style';
import CoinPriceFilterTab from './CoinPriceFilterTab';

function CoinPriceListChart() {
  const dispatch = useDispatch();

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
        <CoinPriceList />
      </CoinPriceListContainer>
    </>
  );
}

export default CoinPriceListChart;
