import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import setCustomChartOptions from '@/utils/setCustomChartOptions';
import CoinDetailInfo from '../CoinDetailInfo/CoinDetailInfo';
import CoinCandleStickChartFilter from './CoinCandleStickChartFilter';

function CoinCandleStickChart({ symbol }) {
  // const dispatch = useDispatch()
  const { candleStickTimeDataList: { data } } = useSelector((state) => state.coinPrice);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const asyncReq = async () => {
      const options = setCustomChartOptions(data);

      setChartOptions({
        ...options,
      });
    };

    if (data) {
      asyncReq();
    }
  }, [data]);

  return (
    <>
      <CoinDetailInfo symbol={symbol} />
      <CoinCandleStickChartFilter symbol={symbol} />
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

export default CoinCandleStickChart;
