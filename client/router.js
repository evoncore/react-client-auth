import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// Components
import App from './components/App';
import GuestHome from './components/guest/Home';
import UserHome from './components/user/Home';
import AdminHome from './components/admin/Home';

export const userRouter = (
  <Provider store={store}>
    <Router history={history}>

      <Route path="/" component={App}>
        <Route authorize={['guest', 'user', 'admin']} path="/guest" component={GuestHome} />
        <Route authorize={['user', 'admin']} path="/user" component={UserHome} />
        <Route authorize={['admin']} path="/admin" component={AdminHome} />
      </Route>

    </Router>
  </Provider>
);