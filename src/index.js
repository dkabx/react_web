import React from 'react';
import ReactDOM from 'react-dom';

import createHistory from 'history/createBrowserHistory'
import {  browserHistory , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, ConnectedRouter } from 'react-router-redux';
import store from './store';
import App from './App';
import './index.css';

import Login from './containers/Login';


const history = createHistory();


ReactDOM.render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/Login" component={Login}/>
            </div>
        </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);
