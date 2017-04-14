import React, { Component } from 'react';
import Email from './Email';
import Password from './Password';
import CustomButton from './CustomButton';

class Signin extends Component {
  render() {
    return (
      <div className="signinSection">
          <div className="signinHeader">
            <div className="closeButton">
              <span>X</span>
            </div>
            <div className="joinUsButtonContainer">
              <span><button>JOIN US</button></span>
            </div>
          </div>
          <div className="signinBody">
            <span>
              <h5>Signin to MyRecruitBoard</h5>
              <span>Signin to MyRecruitBoard</span>
              <div className="editableContainer">
                <Email />
                <Password />
                <CustomButton />
              </div>
            </span>
          </div>
        </div>
    );
  }
}

export default Signin;
