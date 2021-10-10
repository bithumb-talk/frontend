import { COLOR } from '@/constants/style';
import { COIN_CHART_GAP, DEFAULT_ZOOM_OPTION } from '@/constants/coin';

const setZoomButtons = (gap) => {
  switch (gap) {
    case COIN_CHART_GAP.TEN.UNIT:
      return [
        ...DEFAULT_ZOOM_OPTION,
        {
          type: 'day',
          count: 1,
          text: '1day',
          title: 'View 1 day',
          dataGrouping: {
            forced: true,
            units: [['minute', [10]]],
          },
        },
        {
          type: 'day',
          count: 2,
          text: '2day',
          title: 'View 2 day',
          dataGrouping: {
            forced: true,
            units: [['minute', [10]]],
          },
        },
        {
          type: 'day',
          count: 3,
          text: '3day',
          title: 'View 3 day',
          dataGrouping: {
            forced: true,
            units: [['minute', [10]]],
          },
        },
        {
          type: 'day',
          count: 6,
          text: '6day',
          title: 'View 6 day',
          dataGrouping: {
            forced: true,
            units: [['minute', [10]]],
          },
        },
      ];
    case COIN_CHART_GAP.THIRTY.UNIT:
      return [
        ...DEFAULT_ZOOM_OPTION,
        {
          type: 'day',
          count: 1,
          text: '1day',
          title: 'View 1 day',
          dataGrouping: {
            forced: true,
            units: [['minute', [30]]],
          },
        },
        {
          type: 'day',
          count: 2,
          text: '2day',
          title: 'View 2 day',
          dataGrouping: {
            forced: true,
            units: [['minute', [30]]],
          },
        },
        {
          type: 'day',
          count: 3,
          text: '3day',
          title: 'View 3 day',
          dataGrouping: {
            forced: true,
            units: [['minute', [30]]],
          },
        },
        {
          type: 'day',
          count: 6,
          text: '6day',
          title: 'View 6 day',
          dataGrouping: {
            forced: true,
            units: [['minute', [30]]],
          },
        },
      ];
    case COIN_CHART_GAP.HOUR.UNIT:
      return [
        ...DEFAULT_ZOOM_OPTION,
        {
          type: 'day',
          count: 3,
          text: '3day',
          title: 'View 3 day',
          dataGrouping: {
            forced: true,
            units: [['hour', [1]]],
          },
        },
        {
          type: 'day',
          count: 7,
          text: '1 weeks',
          title: 'View 1 weeks',
          dataGrouping: {
            forced: true,
            units: [['hour', [1]]],
          },
        },
        {
          type: 'day',
          count: 14,
          text: '2 weeks',
          title: 'View 2 weeks',
          dataGrouping: {
            forced: true,
            units: [['hour', [1]]],
          },
        },
        {
          type: 'month',
          count: 1,
          text: '1mon',
          title: 'View 1 mon',
          dataGrouping: {
            forced: true,
            units: [['hour', [1]]],
          },
        },
      ];
    default:
      return [
        ...DEFAULT_ZOOM_OPTION,
        {
          type: 'month',
          count: 1,
          text: '1mon',
          title: 'View 1 month',
          dataGrouping: {
            forced: true,
            units: [['day', [1]]],
          },
        },
        {
          type: 'month',
          count: 2,
          text: '2mon',
          title: 'View 2 month',
          dataGrouping: {
            forced: true,
            units: [['day', [1]]],
          },
        },
        {
          type: 'month',
          count: 3,
          text: '3mon',
          title: 'View 3 month',
          dataGrouping: {
            forced: true,
            units: [['day', [1]]],
          },
        },
        {
          type: 'month',
          count: 6,
          text: '6mon',
          title: 'View 6 month',
          dataGrouping: {
            forced: true,
            units: [['day', [1]]],
          },
        },
      ];
  }
};

const setCustomChartOptions = (data, gap) => ({
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
    selected: 1,
    buttons: setZoomButtons(gap),
    buttonTheme: {
      width: 40,
    },
  },
  tooltip: {
    // formatter() {
    //   console.log(this);
    // },
    // console.log(this.point);
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
