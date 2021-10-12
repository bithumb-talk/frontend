export const categoryList = [
  { id: 1, link: '/board/talk', name: 'talk', label: '자유게시판' },
  { id: 2, link: '/board/cointalk', name: 'cointalk', label: '코인잡담' },
  { id: 3, link: '/board/coinBeginner', name: 'coinBeginner', label: '코인초보' },
];

export const menuData = [
  { id: 1, link: '/board/all', name: 'all', title: '전체 게시판', class: 'common', clicked: 'common_clicked' },
  { id: 2, link: '/board/talk', name: 'talk', title: '자유게시판', class: 'common', clicked: 'common_clicked' },
  { id: 3, link: '/board/cointalk', name: 'cointalk', title: '코인잡담', class: 'common', clicked: 'common_clicked' },
  {
    id: 4,
    link: '/board/coinBeginner',
    name: 'coinBeginner',
    title: '코인초보',
    class: 'common',
    clicked: 'common_clicked',
  },
  { id: 5, link: '/coin/BTC', name: 'coin', title: '시세조회', class: 'special', clicked: 'special_clicked' },
  { id: 6, link: '/mypage', name: 'mypage', title: '마이 페이지', class: 'common', clicked: 'common_clicked' },
];
