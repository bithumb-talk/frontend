import React from 'react';
import PropTypes from 'prop-types';
import CommonLayout from '@/components/@layout/CommonLayout';
import { CoinCandleStickChart } from '@/components/index';
import { DEFAULT_COIN } from '@/constants/coin';
import { CoinInfoSection } from './CoinInfoPage.style';

function CoinInfoPage({ match }) {
  const { coinname } = match.params;
  const symbol = coinname.toUpperCase() || DEFAULT_COIN;

  return (
    <>
      <CommonLayout>
        <CoinInfoSection>
          <CoinCandleStickChart symbol={symbol} />
        </CoinInfoSection>
      </CommonLayout>
    </>
  );
}

CoinInfoPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export default CoinInfoPage;
