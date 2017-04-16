import React, { Component } from 'react';
import './scss/App.scss';
import  SigninModal from './common/components/Login/Login';
import  SignupModal from './common/components/Register/Register';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: '',
      password: ''
    };
  };
  render() {
    return (
      <div className="pageContainer">
        <h1>App</h1>
        <SigninModal /> <br /> <br />
        <SignupModal />
      </div>
    );
  }
}

export default App;
