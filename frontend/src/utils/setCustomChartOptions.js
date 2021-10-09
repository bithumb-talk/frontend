import { COLOR } from '@/constants/style';

const setCustomChartOptions = (data) => ({
  yAxis: [
    {
      labels: {
        align: 'left',
      },
      height: '80%',
      resize: {
        enabled: true,
      },
    },
    {
      labels: {
        align: 'left',
      },
      top: '80%',
      height: '20%',
      offset: 0,
    },
  ],
  plotOptions: {
    candlestick: {
      color: COLOR.BLUE,
      lineColor: COLOR.BLUE,
      upColor: COLOR.RED,
      upLineColor: COLOR.RED,
    },
  },
  navigator: {
    // enabled: false
    series: {
      type: 'area',
      pointRange: null,
      dataGrouping: {
        groupPixelWidth: 1,
      },
      color: '#000',
    },
    height: 100,
  },
  scrollbar: {
    // enabled: false,
    // barBackgroundColor: 'gray',
    barBorderRadius: 3,
    barBorderWidth: 0,
    // buttonBackgroundColor: 'gray',
    buttonBorderWidth: 0,
    buttonArrowColor: 'white',
    buttonBorderRadius: 3,
    rifleColor: 'white',
    trackBackgroundColor: 'white',
    trackBorderWidth: 1,
    trackBorderColor: 'silver',
    trackBorderRadius: 3,
  },
  mapNavigation: {
    enabled: true,
    enableButtons: false,
    enableMouseWheelZoom: true,
    zoomType: 'x',
  },
  rangeSelector: {
    // selected: 1,
    enabled: false,
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
