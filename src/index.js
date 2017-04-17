import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import routes from './routes'
import store from './store';
import './index.css';


const history = createHistory()

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>),
  document.getElementById('root'),
);
