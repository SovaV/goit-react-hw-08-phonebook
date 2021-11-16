import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PublicRoute({
  component: Component,
  redirectTo = '/login',
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && routeProps.restricted;
  return <Route {...routeProps}>{!shouldRedirect ? children : <Redirect to={redirectTo} />}</Route>;
}
