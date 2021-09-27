import React from 'react';
import CommonLayout from '@/components/@layout/CommonLayout';
import { CoinCandleStickChart } from '@/components/index';

function CoinInfoPage() {
  return (
    <>
      <CommonLayout>
        <CoinCandleStickChart />
      </CommonLayout>
    </>
  );
}

export default CoinInfoPage;
