import React, { Component } from 'react';
import gitaru from '../images/gitaru.jpeg';
import Button from 'react-bootstrap/Button';

class ImageBackground extends Component {
  render() {

    const image = this.props.image
    const imgstyles = {
      backgroundImage:
        `linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ),
        url(${image}`,
      backgroundSize: `cover`
    }
    return (
      <div className="divback" style={imgstyles}>
        <div className="darken">
          <div className="metadata">
            <div className="header-data">
            <span className="right link"><a className="links" href="About us"><strong>About Us</strong></a></span>
            <span className="right link"><a className="links" href="FAQs"> <strong>FAQs</strong></a></span>
            </div>
            <div className="signup-prompt">
              <p><strong> Do you come from this place?</strong></p>
              <Button className="signup-btn" href="#">Sign Up</Button>
             </div>
          </div>
      </div>
      </div>
    );
  }}
export default ImageBackground;
