import React, { Component } from 'react';


const Banner = ({ props }) => {
    return (
          <div className="bannerSection">
            {console.log(props)}
            <div className="bannerHeader">
              <span>MyRecruitBoard</span>
            </div>
            <div className="bannerQuotes">
              <div>
                <h1>{props.bannerHeader}</h1>
                <span>{props.bannerDesc}
              </span><br/><br/>
                <div className="learnMore">LEARN MORE</div>
              </div>
            </div>
          </div>
    );

};

export default Banner;
