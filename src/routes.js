import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import App from './App';
import Login from 'containers/Login'

const routes = (
  <Switch path="/">
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={Login} />
  </Switch>
)

export default routes
