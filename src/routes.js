import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import App from './App';
import Home from 'containers/Home';
import Login from 'containers/Login'
import Register from 'containers/Register';

const routes = (
  <Switch path="/">
    <Route exact path="/" component={App} />
      <Route exact path="/home" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </Switch>
)

export default routes
