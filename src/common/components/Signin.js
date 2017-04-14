import React, { Component } from 'react';
import Email from './Email';
import Password from './Password';
import CustomButton from './CustomButton';

class Signin extends Component {

  render() {
    return (
      <div>
        <Email />
        <Password />
        <CustomButton />
      </div>
    );
  }
}

export default Signin;
