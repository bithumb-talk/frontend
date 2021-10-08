import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import CoinPriceListItem from './CoinPriceListItem';
import CoinPriceListSkeleton from './CoinPriceListSkeleton';
import { CoinPriceListSection } from './CoinPriceListChart.style';
import EmptyList from './EmptyList';

function CoinPriceList() {
  const { coinPriceList: { isLoading } } = useSelector((state) => state.coinPrice);
  const { filteredCoinPriceList: { data: coins } } = useSelector((state) => state.coinPrice);

  if (isLoading) {
    return (
      <CoinPriceListSkeleton />
    );
  }

  if (!coins) return null;

  return (
    <CoinPriceListSection>
      {
        coins.length === 0
          ? <EmptyList />
          : coins.map((coin) => (
            <CoinPriceListItem
              key={coin.symbol}
              {...coin}
            />
          ))
      }
    </CoinPriceListSection>
  );
}

export default memo(CoinPriceList);
