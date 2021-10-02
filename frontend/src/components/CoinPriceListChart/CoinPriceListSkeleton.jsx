import React from 'react';
import { Skeleton } from '@mui/material';
import { CoinPriceListSection } from './CoinPriceListChart.style';

function CoinPriceListSkeleton() {
  return (
    <CoinPriceListSection>
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={70} />
    </CoinPriceListSection>
  );
}

export default CoinPriceListSkeleton;
