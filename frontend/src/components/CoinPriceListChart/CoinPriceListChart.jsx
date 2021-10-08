import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import useAuth from '@/hooks/useAuth';
import CoinSearchSection from './CoinSearchSection';
import CoinPriceListTab from './CoinPriceListTab';
import CoinPriceList from './CoinPriceList';
import {
  CoinPriceListContainer,
} from './CoinPriceListChart.style';
import CoinPriceFilterTab from './CoinPriceFilterTab';
import CoinLogin from './CoinLogin';

function CoinPriceListChart() {
  const { tabIndex } = useSelector((state) => state.coinPrice);
  const [isLogin] = useAuth();

  return (
    <>
      <CoinPriceListContainer>
        <section>
          <CoinSearchSection />
          <CoinPriceListTab />
          <CoinPriceFilterTab />
        </section>
        {
          tabIndex === 1 && !isLogin
            ? <CoinLogin isModal={false} />
            : <CoinPriceList />
        }
      </CoinPriceListContainer>
    </>
  );
}

export default memo(CoinPriceListChart);
