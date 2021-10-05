import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CommonLayout from '@/components/@layout/CommonLayout';
import { CoinCandleStickChart } from '@/components/index';
import { getCandleStick } from '@/redux/coinPriceSlice';

const CoinInfoSection = styled.article`
  padding: 16px;
  box-shadow: 2px 2px 4px #dee1e7;
  border: 1px solid #eee;
  background-color: #fff;
  width: 98%;
  border-radius: 10px;
`;

function CoinInfoPage({ match }) {
  const dispatch = useDispatch();
  const { coinname } = match.params;
  // console.log(coinname);
  const symbol = coinname || 'BTC';

  useEffect(() => {
    // const abortController = new AbortController();
    let isMounted = true;
    if (isMounted) {
      dispatch(getCandleStick({ symbol, gap: '24H' }));
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, symbol]);

  // useEffect(() => {
  //   dispatch(setSelectedCoin({ symbol }));
  // }, [dispatch, symbol]);

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
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CoinInfoPage;
