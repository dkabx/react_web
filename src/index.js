import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';
import routes from './routes'; // eslint-disable-line
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
