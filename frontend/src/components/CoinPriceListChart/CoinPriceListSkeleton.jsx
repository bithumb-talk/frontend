import React from 'react';
import { Skeleton } from '@mui/material';
import styled from 'styled-components';
import { CoinPriceListSection } from './CoinPriceListChart.style';

const SkeletonSection = styled(CoinPriceListSection)`
  overflow: hidden;
`;

function CoinPriceListSkeleton() {
  return (
    <SkeletonSection>
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={70} />
    </SkeletonSection>
  );
}

export default CoinPriceListSkeleton;
