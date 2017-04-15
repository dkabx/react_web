import React, { Component, PropTypes } from 'react';

class Details extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

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
              <h5>{this.props.data.detailsHeader}</h5>
              <span>{this.props.data.detailsDesc}</span>
              <div className="editableContainer">
                {this.props.children}
              </div>
            </span>
          </div>
        </div>
    );
  }
}

export default Details;
