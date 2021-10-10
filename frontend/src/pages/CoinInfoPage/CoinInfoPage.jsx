import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CommonLayout from '@/components/@layout/CommonLayout';
import { CoinCandleStickChart } from '@/components/index';
import { COIN_CHART_GAP, DEFAULT_COIN } from '@/constants/coin';
import useCoin from '@/hooks/useCoin';
import { CoinInfoSection } from './CoinInfoPage.style';

function CoinInfoPage({ match }) {
  const { onGetCandleStick } = useCoin();
  const { coinname } = match.params;
  const symbol = coinname.toUpperCase() || DEFAULT_COIN;

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      onGetCandleStick({ symbol, gap: COIN_CHART_GAP.DAY.UNIT });
    }

    return () => {
      isMounted = false;
    };
  }, [onGetCandleStick, symbol]);

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
