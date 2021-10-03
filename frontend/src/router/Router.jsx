/* eslint-disable max-len */
import { Route, Switch } from 'react-router-dom';
import Box from '@mui/material/Box';
import {
  HomeMainPage,
  SignInPage,
  SignUpPage,
  MyPage,
  NotFound,
  CoinInfoPage,
  BoardListPage,
  BoardDetailPage,
  BoardWritePage,
  Header,
} from '@/pages/index';
import ROUTE from './routePath';
import PrivateRoute from './PrivateRoute';

const routes = [
  {
    path: ROUTE.MAIN.PATH,
    component: <HomeMainPage />,
    isPrivate: false,
  },
  {
    path: ROUTE.SIGNIN.PATH,
    component: <SignInPage />,
    isPrivate: false,
  },
  {
    path: ROUTE.SIGNUP.PATH,
    component: <SignUpPage />,
    isPrivate: false,
  },
  {
    path: ROUTE.MYPAGE.PATH,
    component: <MyPage />,
    isPrivate: true,
  },
  {
    path: ROUTE.COIN.PATH,
    component: <CoinInfoPage />,
    isPrivate: false,
  },
  {
    path: ROUTE.BOARDALL.PATH,
    component: <BoardListPage />,
    isPrivate: false,
  },
  {
    path: ROUTE.BOARDWRITE.PATH,
    component: <BoardWritePage />,
    isPrivate: false,
  },
  {
    path: ROUTE.BOARDDETAIL.PATH,
    component: <BoardDetailPage />,
    isPrivate: false,
  },
  {
    path: '*',
    component: <NotFound />,
    isPrivate: false,
  },
];

const RouteComponent = routes.map(({ path, component, isPrivate }) => (
  isPrivate
    ? <Route key={path} exact path={path}>{component}</Route>
    : <PrivateRoute key={path} exact path={path}>{component}</PrivateRoute>));

const Router = () => (
  <>
    <Switch>
      <Route
        exact
        path={[ROUTE.MAIN.PATH, ROUTE.COIN.PATH, ROUTE.BOARDALL.PATH, ROUTE.BOARDWRITE.PATH, ROUTE.BOARDDETAIL.PATH]}
      >
        <Box sx={{
          display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between',
        }}
        >
          <Header />
        </Box>
      </Route>
    </Switch>
    <Switch>
      {RouteComponent}
    </Switch>
  </>
);

export default Router;
