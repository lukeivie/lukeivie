import React, { Component } from 'react';
import Logo from '../assets/palm.svg';

class Home extends Component {
  render() {
    return (
      <div className="text-white bg-frontpage" style={{minHeight: "700px"}}>
        <div className="container text-center py-5">
          {/* <h3 className="text-italic fw-9 text-white">You're on the late night</h3> */}
          {/* <img src={Logo} style={{width: "200px", transform: "rotate(345deg)", marginTop: "100px"}} alt=""/> */}
        </div>
      </div>
    );
  }
}

export default Home;
