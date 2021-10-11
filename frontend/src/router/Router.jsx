/* eslint-disable max-len */
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Box from '@mui/material/Box';
import {
  HomeMainPage,
  SignInPage,
  SignUpPage,
  MyPage,
  NotFound,
  BoardListPage,
  BoardDetailPage,
  Header,
  BoardWritePage,
} from '@/pages/index';
import ROUTE from './routePath';
import PrivateRoute from './PrivateRoute';

const CoinInfoPage = lazy(() => import('@/pages/CoinInfoPage/CoinInfoPage'));

const routes = [
  {
    path: ROUTE.MAIN.PATH,
    component: (props) => <HomeMainPage {...props} />,
    isPrivate: false,
  },
  {
    path: ROUTE.SIGNIN.PATH,
    component: (props) => <SignInPage {...props} />,
    isPrivate: false,
  },
  {
    path: ROUTE.SIGNUP.PATH,
    component: (props) => <SignUpPage {...props} />,
    isPrivate: false,
  },
  {
    path: ROUTE.MYPAGE.PATH,
    component: (props) => <MyPage {...props} />,
    isPrivate: true,
  },
  {
    path: ROUTE.COIN.PATH,
    component: (props) => <CoinInfoPage {...props} />,
    isPrivate: false,
  },
  {
    path: ROUTE.BOARDALL.PATH,
    component: (props) => <BoardListPage {...props} />,
    isPrivate: false,
  },
  {
    path: ROUTE.BOARDWRITE.PATH,
    component: (props) => <BoardWritePage {...props} />,
    isPrivate: false,
  },
  {
    path: ROUTE.BOARDDETAIL.PATH,
    component: (props) => <BoardDetailPage {...props} />,
    isPrivate: false,
  },
  {
    path: '*',
    component: (props) => <NotFound {...props} />,
    isPrivate: false,
  },
];

const RouteComponent = routes.map(({ path, component, isPrivate }) => (
  !isPrivate
    ? <Route key={path} exact path={path} render={(props) => component(props)} />
    : <PrivateRoute key={path} exact path={path} component={component} />));

const Router = () => (
  <>
    <Suspense fallback={<div>loading</div>}>
      <Switch>
        <Route
          exact
          path={[ROUTE.MAIN.PATH, ROUTE.COIN.PATH, ROUTE.BOARDALL.PATH, ROUTE.BOARDWRITE.PATH, ROUTE.BOARDDETAIL.PATH]}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              marginTop: '80px',
              justifyContent: 'space-around',
            }}
          >
            <Header />
          </Box>
        </Route>
      </Switch>
      <Switch>{RouteComponent}</Switch>
    </Suspense>
  </>
);

export default Router;
