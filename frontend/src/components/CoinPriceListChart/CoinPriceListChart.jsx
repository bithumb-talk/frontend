import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
          {
            tabIndex !== 2 && <CoinPriceFilterTab />
          }
        </section>
        <CoinPriceList />
      </CoinPriceListContainer>
    </>
  );
}

export default CoinPriceListChart;
