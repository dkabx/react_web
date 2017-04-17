import React, { Component } from 'react';
import Navigation from '../../common/components/Navigation/Navigation';
import './Home.scss';


class Home extends Component {
    render() {

        return (
                <div className="homePageContainer">
                   <div className="test">
                       <Navigation />
                   </div>
                </div>
        );
    }
}

export default Home;

