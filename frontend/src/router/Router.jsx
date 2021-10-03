import { Route, Switch } from 'react-router-dom';
import Box from '@mui/material/Box';
import {
  HomeMainPage, SignInPage, SignUpPage, MyPage, NotFound, CoinInfoPage,
} from '@/pages/index';
import { MenuBar, LoginProfile } from '@/components/index';
import ROUTE from './routePath';
import PrivateRoute from './PrivateRoute';

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
    path: '*',
    component: (props) => <NotFound {...props} />,
    isPrivate: false,
  },
];

const RouteComponent = routes.map(({ path, component, isPrivate }) => (
  isPrivate
    ? <Route key={path} exact path={path} render={(props) => { component(props); }} />
    : <PrivateRoute key={path} exact path={path} render={(props) => { component(props); }} />));

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
        <Box sx={{
          display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between',
        }}
        >
          <MenuBar />
          <LoginProfile />
        </Box>
      </Route>
    </Switch>
    <Switch>
      {RouteComponent}
    </Switch>
  </>
);

export default Router;
