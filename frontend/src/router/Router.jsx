import { Route, Switch } from 'react-router-dom';
import {
  HomeMainPage, SignInPage, SignUpPage, MyPage, NotFound,
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
  <Switch>
    {RouteComponent}
  </Switch>
);

export default Router;
