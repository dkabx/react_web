import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router-dom';
import rootReducer from './common/reducers';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancer = compose(
  applyMiddleware(
    thunk,
    routerMiddleware(browserHistory),
  ),
);

// Add the reducer to your store on the `routing` key
const store = createStore(rootReducer, composeWithDevTools(enhancer));

// Create an enhanced history that syncs navigation events with the store
export default store;