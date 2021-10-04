import { COLOR } from '@/constants/style';

const setCustomChartOptions = (data) => ({
  plotOptions: {
    candlestick: {
      color: COLOR.BLUE,
      upColor: COLOR.RED,
    },
  },
  navigator: {
    series: {
      type: 'area',
      pointRange: null,
      dataGrouping: {
        groupPixelWidth: 1,
      },
      color: '#000',
    },
  },
  rangeSelector: {
    selected: 1,
    // buttons: [
    //   // {
    //   //   type: 'minute',
    //   //   count: 10,
    //   //   text: '10m',
    //   //   title: 'View 10 minute',
    //   // },
    //   // {
    //   //   type: 'minute',
    //   //   count: 30,
    //   //   text: '30m',
    //   //   title: 'View 30 minute',
    //   // },
    //   {
    //     type: 'month',
    //     count: 3,
    //     text: '1h',
    //     title: 'View 1 hour',
    //   },
    //   {
    //     type: 'month',
    //     count: 5,
    //     text: '1d',
    //     dataGrouping: {
    //       forced: true,
    //       units: [['day', [1]]],
    //     },
    //   },
    //   {
    //     type: 'all',
    //     text: 'All',
    //     title: 'View all',
    //   },
    // ],
  },
  series: [
    {
      type: 'candlestick',
      data: [...data],
      dataGrouping: {
        units: [
          ['minute', [10, 30]],
          ['hour', [1]],
          ['day', [1]],
        ],
      },
    },
  ],
});

export default setCustomChartOptions;
