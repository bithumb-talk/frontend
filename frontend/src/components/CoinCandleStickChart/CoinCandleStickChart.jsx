import React, { useEffect, useState, memo, useCallback } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import setCustomChartOptions from '@/utils/setCustomChartOptions';
import { COIN_CHART_GAP } from '@/constants/coin';
import CoinDetailInfo from '../CoinDetailInfo/CoinDetailInfo';
import CoinCandleStickChartFilter from './CoinCandleStickChartFilter';

function CoinCandleStickChart({ symbol }) {
  const [chartGap, setChartGap] = useState(COIN_CHART_GAP.DAY.UNIT);
  const {
    candleStickTimeDataList: { data },
  } = useSelector((state) => state.coinPrice);
  const [chartOptions, setChartOptions] = useState({});

  const onSetChartGap = useCallback((gap) => {
    setChartGap(gap);
  }, []);

  useEffect(() => {
    const setOptions = async () => {
      const options = setCustomChartOptions(data, chartGap);

      setChartOptions({
        ...options,
      });
    };

    if (data) {
      setOptions();
    }
  }, [data, chartGap]);

  if (!data) {
    return null;
  }

  return (
    <>
      <CoinDetailInfo symbol={symbol} />
      <CoinCandleStickChartFilter symbol={symbol} onSetChartGap={onSetChartGap} />
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        constructorType="stockChart"
      />
    </>
  );
}

CoinCandleStickChart.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default memo(CoinCandleStickChart);
