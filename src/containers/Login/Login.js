import React, { Component } from 'react';

import './Login.scss';
import Signin  from '../../common/components/Signin';
import Banner from '../../common/components/Banner';
import Details from '../../common/components/Details';


class Login extends Component {
    render() {
        let signinData = {
            bannerHeader : "GET THE MORE OF YOU",
            bannerDesc   : "We're proud to be the largest athletic recruiting platform since we were founded. The sports recruiting world has shifted.",
            detailsHeader: "Signin to MyRecruitBoard",
            detailsDesc : "Enter your details below."
        };
        return (
                <div className="pageContainer">
                    <div className="bannerContainer">
                        <Banner data={signinData} />
                    </div>
                    <div className="signInContainer">
                        <Details data={signinData}>
                            <Signin />
                        </Details>
                    </div>
                </div>
        );
    }
}

export default Login;

