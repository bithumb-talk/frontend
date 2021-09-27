import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const initialOptions = {
  rangeSelector: {
    selected: 1,
  },
  title: {
    text: 'AAPL Stock Price',
  },
};

function CoinCandleStickChart() {
  const [chartOptions, setChartOptions] = useState(initialOptions);

  useEffect(() => {
    const asyncReq = async () => {
      const res = await fetch('https://demo-live-data.highcharts.com/aapl-ohlc.json');
      const data = await res.json();

      const series = [{
        type: 'candlestick',
        name: 'AAPL Stock Price',
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
    console.log(chartOptions);
  }, []);

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        constructorType="stockChart"
      />
    </>
  );
}

export default CoinCandleStickChart;
