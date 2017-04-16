/**
 * Created by sairam on 14/04/17.
 */
import { createReducer } from 'reducers'
import { Map } from 'immutable'
import { createStructuredSelector } from 'reselect'
import {
  LOGIN_REQUESTED,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
} from './LoginActionTypes'

export const loginInitialState = Map({
  isLoginRequested: false,
});

const handlers = {
  [LOGIN_REQUESTED](state, action) {
    return state.merge({
      isLoginRequested: true,
    })
  },
  [LOGIN_FAILED](state, action) {
    return state.merge({
      isLoginRequested: false,
    })
  },
  [LOGIN_SUCCESSFUL](state, action) {
    return state.merge({
      isLoginRequested: false,
    })
  }
}

export const login = createReducer(loginInitialState, handlers)

// LOGIN SELECTOR
const getIsLoginRequested = (state) => state.login.get('isLoginRequested')

export const loginSelector = createStructuredSelector({
  isLoginRequested: getIsLoginRequested,
})
