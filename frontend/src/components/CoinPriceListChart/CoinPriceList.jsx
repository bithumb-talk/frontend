import React from 'react';
// import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCoinPriceList } from '@/redux/coinPriceSlice';
import CoinPriceListItem from './CoinPriceListItem';
import CoinPriceListSkeleton from './CoinPriceListSkeleton';
import { CoinPriceListSection } from './CoinPriceListChart.style';

function CoinPriceList() {
  // const tabIndex = useSelector((state) => state.coinPrice.tabIndex);
  // const dispatch = useDispatch();
  const { coinPriceList: { isLoading } } = useSelector((state) => state.coinPrice);
  const { filteredCoinPriceList: { data: coins } } = useSelector((state) => state.coinPrice);

  // const coinListView = coins.map((coin) => (<CoinPriceListItem key={coin.symbol} />));

  if (isLoading) {
    return (
      <CoinPriceListSkeleton />
    );
  }

  if (!coins) return null;

  return (
    <CoinPriceListSection>
      {
        coins.map((coin) => (
          <CoinPriceListItem
            key={coin.symbol}
            {...coin}
          />
        ))
      }
    </CoinPriceListSection>
  );
}

export default CoinPriceList;
