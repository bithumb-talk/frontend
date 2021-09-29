import React from 'react';
import styled from 'styled-components';
import CommonLayout from '@/components/@layout/CommonLayout';
import { CoinCandleStickChart } from '@/components/index';

const CoinInfoSection = styled.article`
  padding: 16px;
  box-shadow: 2px 2px 4px #dee1e7;
  border: 1px solid #eee;
  background-color: #fff;
  width: 98%;
`;

function CoinInfoPage() {
  return (
    <>
      <CommonLayout>
        <CoinInfoSection>
          <CoinCandleStickChart />
        </CoinInfoSection>
      </CommonLayout>
    </>
  );
}

export default CoinInfoPage;
