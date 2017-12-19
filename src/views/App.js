import React, { Component } from 'react';
import { Button } from 'reactstrap';
import liLogoWhite from '../assets/li-logo-white.svg';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header container-fluid bg-black d-block text-center justify-content-center fixed-top p-3">
          <img src={liLogoWhite} alt="" style={{width: "175px"}}/>
        </div>
        <div className="margin-top"></div>
        <div className="container p-5 bg-carbon bt-1-carbon text-white text-center">
          <h2 className="text-white mb-0">Under Construction</h2>
          <p className="mb-1">Coming soon, stay tuned...</p>
        </div>
      </div>
    );
  }
}

export default App;
