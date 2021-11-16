import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router';
import Container from './Container/Container';
import Spiner from './Loader/Loader.js';
import Appbar from './AppBar/AppBar';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './UserMenu/PrivateRoute';
import PublicRoute from './UserMenu/PublicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = lazy(() => import('./vievs/Homepage/Homepage' /* webpackChunkName: "Homepage" */));
// const Moviespage = lazy(() =>
//   import('./vievs/Moviespage/Moviespage' /* webpackChunkName: "Moviespage" */),
// );

const ContactsView = lazy(() =>
  import('./vievs/Contacts/ContactsView' /* webpackChunkName: "ContactsView" */),
);
const LoginView = lazy(() => import('./vievs/LoginView' /* webpackChunkName: "LoginView" */));
const RegisterView = lazy(() =>
  import('./vievs/RegisterView' /* webpackChunkName: "RegisterView" */),
);
const NotFoundView = lazy(() =>
  import('./vievs/NotFoundView' /* webpackChunkName: "NotFoundView" */),
);

export default function App() {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(authSelectors.geISfetchingCurrent);

  useEffect(() => dispatch(authOperations.fetchCurrentUser()), [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <Appbar />
        <Suspense fallback={<Spiner />}>
          <Switch>
            <PublicRoute path="/" exact>
              <Homepage />
            </PublicRoute>
            <PublicRoute path="/register" exact restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" exact redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts" exact redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    )
  );
}
