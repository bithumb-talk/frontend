import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, ButtonGroup } from '@mui/material';
import { getCandleStick } from '@/redux/coinPriceSlice';
import useDebounce from '@/hooks/useDebounce';

function CoinCandleStickChartFilter({ symbol }) {
  const dispatch = useDispatch();
  const dispatchCandleStick = (gap) => dispatch(getCandleStick({ symbol, gap }));
  const candleStickDebounce = useDebounce(dispatchCandleStick, 200);
  const onClickButton = (gap) => {
    candleStickDebounce.current(gap);
  };

  return (
    <ButtonGroup color="primary" size="small" aria-label="small button group">
      <Button key="10m" type="button" onClick={() => onClickButton('10m')}>10분</Button>
      <Button key="30m" type="button" onClick={() => onClickButton('30m')}>30분</Button>
      <Button key="1h" type="button" onClick={() => onClickButton('1h')}>1시간</Button>
      <Button key="24h" type="button" onClick={() => onClickButton('24h')}>1일</Button>
    </ButtonGroup>
  );
}

CoinCandleStickChartFilter.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default CoinCandleStickChartFilter;
