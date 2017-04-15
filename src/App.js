import React, { Component } from 'react';
import Banner from './common/components/Banner';
import Details from './common/components/Details';
import Signin from './common/components/Signin';
import Signup from './common/components/Signup';
import './scss/App.scss';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.signinData = {
      bannerHeader : "GET THE MORE OF YOU",
      bannerDesc   : "We're proud to be the largest athletic recruiting platform since we were founded. The sports recruiting world has shifted.",
      detailsHeader: "Signin to MyRecruitBoard",
      detailsDesc : "Enter your details below."
    };

    this.joinUsData = {
      bannerHeader : "JOIN THE GREATEST",
      bannerDesc   : "We're proud to be the largest athletic recruiting platform since we were founded. The sports recruiting world has shifted.",
      detailsHeader: "Welcome to MyRecruit Board",
      detailsDesc : "You are now part of a social media based recruiting network where you can directly connect with college coaches and college admissions counselors."
    }

    this.state = {
      name: '',
      password: ''
    };
  };
  render() {
    return (
      <div className="pageContainer">
        <div className="bannerContainer">
          <Banner data={this.signinData} />
        </div>
        <div className="signInContainer">
          <Details data={this.signinData}>
            <Signin />
          </Details>
        </div>
        <div className="joinUsContainer">
          <div className="joinUsBanner">
            <Banner data={this.joinUsData} />
          </div>
          <div className="joinUsDetails">
            <Details data={this.joinUsData}>
              <Signup />
            </Details>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
