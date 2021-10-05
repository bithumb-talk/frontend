import { Route, Redirect } from 'react-router-dom';
import PropsTypes from 'prop-types';
import ROUTE from './routePath';

const PrivateRoute = ({ component, path }) => {
  const userFlag = true;

  return (
    <>
      {
        userFlag
          ? <Route path={path} render={(props) => component(props)} />
          : <Redirect to={ROUTE.LOGIN.PATH} />
      }
    </>

  );
};

PrivateRoute.propTypes = {
  component: PropsTypes.func.isRequired,
  path: PropsTypes.string.isRequired,
};

export default PrivateRoute;
