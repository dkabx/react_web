import React, { Component } from 'react';


class Banner extends Component {
  render() {
    return (
          <div className="bannerSection">
            {console.log(this.props)}
            <div className="bannerHeader">
              <span>MyRecruitBoard</span>
            </div>
            <div className="bannerQuotes">
              <div>
                <h1>{this.props.data.bannerHeader}</h1>
                <span>{this.props.data.bannerDesc}
              </span><br/><br/>
                <div className="learnMore">LEARN MORE</div>
              </div>
            </div>
          </div>
    );
  }
}

export default Banner;
