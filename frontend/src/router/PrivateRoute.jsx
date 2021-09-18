import { Route, Redirect } from 'react-router-dom';
import PropsTypes from 'prop-types';
import ROUTE from './route';

const PrivateRoute = ({ children, ...props }) => {
  const userFlag = true;

  return (
    <Route {...props}>{userFlag ? children : <Redirect to={ROUTE.LOGIN.PATH} />}</Route>
  );
};

PrivateRoute.propTypes = {
  children: PropsTypes.node.isRequired,
};

export default PrivateRoute;
