import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as reducers from './reducers';

const rootReducer = combineReducers({ ...reducers, routing: routerReducer });

export { default as createReducer } from './createReducer';
export default rootReducer;