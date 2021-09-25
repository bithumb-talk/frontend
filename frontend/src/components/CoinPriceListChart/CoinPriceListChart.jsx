import React from 'react';

import CoinSearchSection from './CoinSearchSection';
import CoinPriceListTab from './CoinPriceListTab';
import CoinPriceList from './CoinPriceList';

import {
  CoinPriceListContainer,
} from './CoinPriceListChart.style';

function CoinPriceListChart() {
  return (
    <>
      <CoinPriceListContainer>
        <CoinSearchSection />
        <CoinPriceListTab />
        <CoinPriceList />
      </CoinPriceListContainer>
    </>
  );
}

export default CoinPriceListChart;
