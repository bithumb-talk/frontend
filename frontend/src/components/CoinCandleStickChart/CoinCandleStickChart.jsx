import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { CoinDetailInfo } from '@/components/index';

const initialOptions = {
  rangeSelector: {
    selected: 1,
  },
};

function CoinCandleStickChart() {
  const [chartOptions, setChartOptions] = useState(initialOptions);

  useEffect(() => {
    const asyncReq = async () => {
      const res = await fetch('https://demo-live-data.highcharts.com/aapl-ohlc.json');
      const data = await res.json();
      console.log(data);
      const series = [{
        type: 'candlestick',
        data,
        dataGrouping: {
          units: [
            [
              'week', // unit name
              [1], // allowed multiples
            ], [
              'month',
              [1, 2, 3, 4, 6],
            ],
          ],
        },
      }];

      setChartOptions({
        ...initialOptions,
        series,
      });
    };

    asyncReq();
  }, []);

  return (
    <>
      <CoinDetailInfo />
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        constructorType="stockChart"
      />
    </>
  );
}

export default CoinCandleStickChart;
