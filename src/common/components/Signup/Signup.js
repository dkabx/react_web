import React, { Component } from 'react';
import Name from '../Name/Name';
import Email from '../Email/Email';
import Password from '../Password/Password';
import Category from '../SignupCategory/SignupCategory';
import CustomButton from '../CustomButton/CustomButton';

class Signin extends Component {

  render() {
    return (
      <div>
        <Name />
        <Email />
        <Password />
        <Category />
        <CustomButton />
      </div>
    );
  }
}

export default Signin;
