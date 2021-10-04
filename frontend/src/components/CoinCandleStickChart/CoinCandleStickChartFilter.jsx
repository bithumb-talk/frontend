import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getCandleStick } from '@/redux/coinPriceSlice';
import useDebounce from '@/hooks/useDebounce';
// import styled from 'styled-components';

function CoinCandleStickChartFilter({ symbol }) {
  const dispatch = useDispatch();
  const dispatchCandleStick = (gap) => dispatch(getCandleStick({ symbol, gap }));
  const candleStickDebounce = useDebounce(dispatchCandleStick, 200);
  const onClickButton = (gap) => {
    candleStickDebounce.current(gap);
  };

  return (
    <div>
      <button type="button" onClick={() => onClickButton('10m')}>10분</button>
      <button type="button" onClick={() => onClickButton('30m')}>30분</button>
      <button type="button" onClick={() => onClickButton('1h')}>1시간</button>
      <button type="button" onClick={() => onClickButton('24h')}>1일</button>
    </div>
  );
}

CoinCandleStickChartFilter.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default CoinCandleStickChartFilter;
