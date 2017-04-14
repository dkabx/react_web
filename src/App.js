import React, { Component } from 'react';
import Banner from './common/components/Banner';
import Signin from './common/components/Signin';
import './scss/App.scss';


class App extends Component {
  render() {
    return (
      <div className="pageContainer">
        <div className="bannerContainer">
          <Banner />
        </div>
        <div className="signInContainer">
          <Signin/>
        </div>
      </div>
    );
  }
}

export default App;
