import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, ButtonGroup } from '@mui/material';
import { getCandleStick } from '@/redux/coinPriceSlice';
import useDebounce from '@/hooks/useDebounce';
import { COIN_CHART_GAP } from '@/constants/coin';

function CoinCandleStickChartFilter({ symbol }) {
  const dispatch = useDispatch();
  const dispatchCandleStick = (gap) => dispatch(getCandleStick({ symbol, gap }));
  const candleStickDebounce = useDebounce(dispatchCandleStick, 200);
  const onClickButton = (gap) => {
    candleStickDebounce.current(gap);
  };

  return (
    <ButtonGroup color="primary" size="small" aria-label="small button group">
      <Button key="10m" type="button" onClick={() => onClickButton(COIN_CHART_GAP.TEN.UNIT)}>{COIN_CHART_GAP.TEN.TITLE}</Button>
      <Button key="30m" type="button" onClick={() => onClickButton(COIN_CHART_GAP.THIRTY.UNIT)}>{COIN_CHART_GAP.THIRTY.TITLE}</Button>
      <Button key="1h" type="button" onClick={() => onClickButton(COIN_CHART_GAP.HOUR.UNIT)}>{COIN_CHART_GAP.HOUR.TITLE}</Button>
      <Button key="24h" type="button" onClick={() => onClickButton(COIN_CHART_GAP.DAY.UNIT)}>{COIN_CHART_GAP.DAY.TITLE}</Button>
    </ButtonGroup>
  );
}

CoinCandleStickChartFilter.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default CoinCandleStickChartFilter;
