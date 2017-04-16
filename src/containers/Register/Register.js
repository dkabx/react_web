import React, { Component } from 'react';

import '../../scss/App.scss';
import Signup  from '../../common/components/Signup';
import Banner from '../../common/components/Banner';
import Details from '../../common/components/Details';


class Login extends Component {
    render() {
        let joinUsData = {
            bannerHeader : "JOIN THE GREATEST",
            bannerDesc   : "We're proud to be the largest athletic recruiting platform since we were founded. The sports recruiting world has shifted.",
            detailsHeader: "Welcome to MyRecruit Board",
            detailsDesc : "You are now part of a social media based recruiting network where you can directly connect with college coaches and college admissions counselors."
        }
        return (
            <div className="joinUsContainer">
                <div className="joinUsBanner">
                    <Banner data={joinUsData} />
                </div>
                <div className="joinUsDetails">
                    <Details data={joinUsData}>
                        <Signup />
                    </Details>
                </div>
            </div>
        );
    }
}

export default Login;

