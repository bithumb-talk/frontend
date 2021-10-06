import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CommonLayout from '@/components/@layout/CommonLayout';
import { CoinCandleStickChart } from '@/components/index';
import { getCandleStick } from '@/redux/coinPriceSlice';
import { COIN_CHART_GAP, DEFAULT_COIN } from '@/constants/coin';
import { CoinInfoSection } from './CoinInfoPage.style';

function CoinInfoPage({ match }) {
  const dispatch = useDispatch();
  const { coinname } = match.params;
  const symbol = coinname.toUpperCase() || DEFAULT_COIN;

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(getCandleStick({ symbol, gap: COIN_CHART_GAP.HOUR.UNIT }));
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, symbol]);

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
