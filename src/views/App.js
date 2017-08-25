import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid bg-black text-center justify-content-center fixed-top p-2">
          <h4 className="text-white text-uppercase-title mb-0">Luke Ivie</h4>
        </div>
        <div className="container-fluid bg-sunset text-center justify-content-center p-5" style={{marginTop: "42px"}}>
          <img className="yl-logo" style={{width: "100px"}} src={logo} alt="luke_ivie_logo" />
        </div>
        <div className="container pt-5">
          <div className="row">
            <div className="col-12">
              <h3 className="text-white"><i className="fa fa-moon-o"></i> Good Evening</h3>
              <p className="text-pebble">You're on the late night</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
