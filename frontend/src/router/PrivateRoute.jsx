import { Route, Redirect } from 'react-router-dom';
import PropsTypes from 'prop-types';
import ROUTE from './routePath';

const PrivateRoute = ({ component, path }) => {
  const userFlag = window.localStorage.getItem('token');

  return (
    <>
      {
        userFlag
          ? <Route key={path} exact path={path} render={(props) => component(props)} />
          : <Redirect to={ROUTE.SIGNIN.PATH} />
      }
    </>

  );
};

PrivateRoute.propTypes = {
  component: PropsTypes.func.isRequired,
  path: PropsTypes.string.isRequired,
};

export default PrivateRoute;
