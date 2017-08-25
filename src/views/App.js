import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid bg-black p-5 text-center justify-content-center">
          <img className="" style={{width: "200px"}} src={logo} alt="luke_ivie_logo" />
          <h3 className="text-white text-uppercase-title mt-3 mb-0">Luke Ivie</h3>
        </div>
        <p></p>
      </div>
    );
  }
}

export default App;
