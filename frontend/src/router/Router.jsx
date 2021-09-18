import { Route, Switch } from 'react-router-dom';
import {
  HomeMainPage, LoginPage, MyPage, NotFound,
} from '@/pages/index';
import ROUTE from './route';
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
    path: '*',
    component: <NotFound />,
  },
];

const RouteComponent = routes.map(({ path, component, isPrivate }) => (
  isPrivate
    ? <Route key={path} exact path={path}>{component}</Route>
    : <PrivateRoute key={path} exact path={path}>{component}</PrivateRoute>));

const Router = () => (
  <Switch>
    {RouteComponent}
  </Switch>
);

export default Router;
