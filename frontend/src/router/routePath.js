const ROUTE = Object.freeze({
  MAIN: {
    PATH: '/',
  },
  SIGNIN: {
    PATH: '/signin',
  },
  SIGNUP: {
    PATH: '/signup',
  },
  MYPAGE: {
    PATH: '/mypage',
  },
  COIN: {
    PATH: '/coin/:coinname?',
  },
  BOARDALL: {
    PATH: '/board/:name',
  },
  BOARDWRITE: {
    PATH: '/boardwrite',
  },
  BOARDDETAIL: {
    PATH: '/boarddetail/:no',
  },
});

export default ROUTE;
