// @flow
import { has } from 'ramda';
import type { InitialState, Handlers, Action } from '../../types'

export default (initialState: InitialState, handlers: Handlers) => (state: InitialState = initialState, action: Action = {}) => {
  if (has(action.type, handlers)) {
    return handlers[action.type](state, action);
  }
  return state;
};