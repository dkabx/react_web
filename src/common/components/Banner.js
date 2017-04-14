import React, { Component } from 'react';


class Banner extends Component {
  render() {
    return (
          <div className="bannerSection">
            <div className="bannerHeader">
              <span>MyRecruitBoard</span>
            </div>
            <div className="bannerQuotes">
              <div>
                <h1>GET THE MORE OF YOU</h1>
                <span>Were proud to be the largest athletic recruiting platform since we were
                founded. The sports recruiting world has shifted.
              </span><br/><br/>
                <div className="learnMore">LEARN MORE</div>
              </div>
            </div>
          </div>
    );
  }
}

export default Banner;
