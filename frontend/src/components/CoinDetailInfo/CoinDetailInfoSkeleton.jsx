import React from 'react';
import { Skeleton } from '@mui/material';
import styled from 'styled-components';

const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const TitleContainer = styled.div`
  border-bottom: 0.5px solid #eee;
  padding-bottom: 10px;
`;

function CoinDetailInfoSkeleton() {
  return (
    <>
      <TitleContainer>
        <Skeleton animation="wave" width={100} height={30} />
      </TitleContainer>
      <FlexSpaceBetween>
        <div>
          <Skeleton animation="wave" width={200} height={30} />
          <Skeleton animation="wave" width={200} height={30} />
        </div>
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
