import React, { Component } from 'react';
import Name from './Name';
import Email from './Email';
import Password from './Password';
import Category from './SignupCategory';
import CustomButton from './CustomButton';

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
