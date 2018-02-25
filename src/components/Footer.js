import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer container-fluid d-block text-center justify-content-center p-3 text-pebble fs-xxs fw-regular">
        <i>&copy; 2017-{new Date().getFullYear()} Attalia</i>
      </div>
    );
  }
}

export default Footer;
