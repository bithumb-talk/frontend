import { Route, Switch } from 'react-router-dom';
import {
  CoinInfoPage,
  HomeMainPage,
  LoginPage,
  MyPage,
  NotFound,
} from '@/pages/index';
import { MenuBar } from '@/components/index';
import ROUTE from './routePath';
import PrivateRoute from './PrivateRoute';

const routes = [
  {
    path: ROUTE.MAIN.PATH,
    component: <HomeMainPage />,
    isPrivate: false,
  },
  {
    path: ROUTE.LOGIN.PATH,
    component: <LoginPage />,
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
        path={
        [
          ROUTE.MAIN.PATH,
          ROUTE.COIN.PATH,
        ]
      }
      >
        <MenuBar />
      </Route>
    </Switch>
    <Switch>
      {RouteComponent}
    </Switch>
  </>
);

export default Router;
