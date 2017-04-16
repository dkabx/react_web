import React, { Component } from 'react';
import Email from '../Email/Email';
import Password from '../Password/Password';
import CustomButton from '../CustomButton/CustomButton';

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
