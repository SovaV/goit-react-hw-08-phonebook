import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';
import Container from './Container/Container';
import Spiner from './Loader/Loader.js';
import Appbar from './AppBar/AppBar';

const Homepage = lazy(() => import('./vievs/Homepage/Homepage' /* webpackChunkName: "Homepage" */));
const Moviespage = lazy(() =>
  import('./vievs/Moviespage/Moviespage' /* webpackChunkName: "Moviespage" */),
);

const ContactsView = lazy(() =>
  import('./vievs/Contacts/ContactsView' /* webpackChunkName: "ContactsView" */),
);
const NotFoundView = lazy(() =>
  import('./vievs/NotFoundView' /* webpackChunkName: "NotFoundView" */),
);
const LoginView = lazy(() => import('./vievs/LoginView' /* webpackChunkName: "LoginView" */));
const RegisterView = lazy(() =>
  import('./vievs/RegisterView' /* webpackChunkName: "RegisterView" */),
);

export default function App() {
  return (
    <Container>
      <Appbar />
      <Suspense fallback={<Spiner />}>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/movies" exact>
            <Moviespage />
          </Route>
          <Route path="/login" exact>
            <LoginView />
          </Route>
          <Route path="/register" exact>
            <RegisterView />
          </Route>
          <Route path="/contacts" exact>
            <ContactsView />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
