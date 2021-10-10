export const COIN_CHART_GAP = Object.freeze({
  TEN: { UNIT: '10m', TITLE: '10분' },
  THIRTY: { UNIT: '30m', TITLE: '30분' },
  HOUR: { UNIT: '1h', TITLE: '1시간' },
  DAY: { UNIT: '24h', TITLE: '1일' },
});

export const DEFAULT_COIN = 'BTC';

export const COIN_UNIT = Object.freeze({
  KRW: 'KRW',
  PREVIOUS_GAP: '전일대비',
  HIGH_PRICE: '고가',
  LOW_PRICE: '저가',
  TRADING_VOLUME: '거래량',
  TRADING_PRICE: '거래대금',
});

export const DEFAULT_ZOOM_OPTION = [
  {
    type: 'all',
    text: 'All',
    title: 'View all',
  },
];
