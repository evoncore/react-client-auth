import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// Components
import App from './components/App';
import NotFound from './components/NotFound';

const router = (
  <Provider store={store}>
    <Router history={history}>

      <Route authorize={['user', 'admin']} path="/" component={App} />
      <Route path="/not-found" component={NotFound} />

    </Router>
  </Provider>
);

export default router;