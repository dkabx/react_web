import React, { Component } from 'react';

class Password extends Component {
  render() {
    return (
      <div className="passwordContainer">
       <div className="labelsContainer">
         <label>Password</label>
         <label className="forgotPassword">Forgot Password?</label>
       </div>
       <input type="Password" />
      </div>
    );
  }
}

export default Password;
