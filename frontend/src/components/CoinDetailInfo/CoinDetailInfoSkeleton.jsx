import React from 'react';
import { Skeleton } from '@mui/material';
import styled from 'styled-components';
import { BREAK_POINT } from '@/constants/style';

const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media only screen and (max-width: ${BREAK_POINT.XS}px) {
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  border-bottom: 0.5px solid #eee;
  padding-bottom: 10px;
`;

const TopSkeletonContainer = styled.div`
  @media only screen and (max-width: ${BREAK_POINT.XS}px) {
    margin-bottom: 50px
  }
`;

function CoinDetailInfoSkeleton() {
  return (
    <>
      <TitleContainer>
        <Skeleton animation="wave" width={100} height={30} />
      </TitleContainer>
      <FlexSpaceBetween>
        <TopSkeletonContainer>
          <Skeleton animation="wave" width={200} height={30} />
          <Skeleton animation="wave" width={200} height={30} />
        </TopSkeletonContainer>
        <div>
          <Skeleton animation="wave" width={200} height={30} />
          <Skeleton animation="wave" width={200} height={30} />
          <Skeleton animation="wave" width={200} height={30} />
          <Skeleton animation="wave" width={200} height={30} />
        </div>
      </FlexSpaceBetween>
    </>
  );
}

export default CoinDetailInfoSkeleton;
