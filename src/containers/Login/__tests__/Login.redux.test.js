import {
  login,
  loginSelector,
  loginInitialState,
} from '../Login.redux'
import {
  LOGIN_FAILED,
  LOGIN_REQUESTED,
  LOGIN_SUCCESSFUL,
} from '../LoginActionTypes'

describe('LOGIN REDUX', () => {
  test('Initial Login reducers state', () => {
    expect(loginInitialState).toMatchSnapshot()
  })
  test('LOGIN_REQUESTED changes state to following', () => {
    const newState = login(loginInitialState, {
      type: LOGIN_REQUESTED,
    })
    expect(newState).toMatchSnapshot()
  })
  test('LOGIN_FAILED changes state to following', () => {
    const newState = login(loginInitialState, {
      type: LOGIN_FAILED,
    })
    expect(newState).toMatchSnapshot()
  })
  test('LOGIN_SUCCESSFULL changes state to following', () => {
    const newState = login(loginInitialState, {
      type: LOGIN_SUCCESSFUL,
    })
    expect(newState).toMatchSnapshot()
  })
})
