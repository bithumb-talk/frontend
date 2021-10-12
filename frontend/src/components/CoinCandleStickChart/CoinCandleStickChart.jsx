import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import setCustomChartOptions from '@/utils/setCustomChartOptions';
import { COIN_CHART_GAP } from '@/constants/coin';
import useCoin from '@/hooks/useCoin';
import usePrevious from '@/hooks/usePrevious';
import CoinDetailInfo from '../CoinDetailInfo/CoinDetailInfo';
import CoinCandleStickChartFilter from './CoinCandleStickChartFilter';

function CoinCandleStickChart({ symbol }) {
  const { onGetCandleStick } = useCoin();
  const [chartGap, setChartGap] = useState('');
  const {
    candleStickTimeDataList: { data },
  } = useSelector((state) => state.coinPrice);
  const [chartOptions, setChartOptions] = useState({});
  const prevData = usePrevious(data);

  const onSetChartGap = (gap) => {
    setChartGap(gap);
  };

  useEffect(() => {
    setChartGap(COIN_CHART_GAP.DAY.UNIT);
    onGetCandleStick({ symbol, gap: COIN_CHART_GAP.DAY.UNIT });
  }, [onGetCandleStick, symbol]);

  useEffect(() => {
    const setOptions = () => {
      const options = setCustomChartOptions(data, chartGap);

      setChartOptions({
        ...options,
      });
    };

    if (data && data !== prevData) {
      setOptions();
    }
  }, [prevData, data, chartGap]);

  if (!data) {
    return null;
  }

  return (
    <>
      <CoinDetailInfo symbol={symbol} />
      <CoinCandleStickChartFilter symbol={symbol} onSetChartGap={onSetChartGap} />
      {
        data
        && (
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          constructorType="stockChart"
        />
        )
      }

    </>
  );
}

CoinCandleStickChart.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default CoinCandleStickChart;
