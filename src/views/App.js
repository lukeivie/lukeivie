import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import yllogo from '../assets/yl-logo.svg';
import { Button } from 'reactstrap';
import SpotifyPlayer from 'react-spotify-player';

const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

class App extends Component {
  render() {
    return (
      <div className="container-fluid bg-pine-blur px-0 pb-5">
        <div className="header py-3 bg-black">
          <h5 className="text-white text-center mb-0 text-uppercase-title" style={{fontWeight: "500"}}>Pine Design</h5>
        </div>
        <div className="container post bg-white p-4 p-md-5 mt-5">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1 className="mb-1">How To Stay Mindful in a Crazy World</h1>
              <a href="" className="d-block pb-4">Luke Ivie</a>
              <p className="">And so I'm offering this simple phrase, to kids from one to ninety-two. Although it's been said, many times, many ways, Merry Christmas, to you!</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="list-group">
                <div className="list-group-item p-3  bg-snow">
                  <h5 className="text-center mb-0 w-100">Recent Posts</h5>
                </div>
                <a href="" className="list-group-item">
                  <p className="mb-0">The Peace and Calm of Life <i className="fa fa-long-arrow-right"></i></p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container post bg-white p-4 p-md-5 mt-5">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1 className="mb-1">How To Stay Mindful in a Crazy World</h1>
              <a href="" className="d-block pb-4">Luke Ivie</a>
              <p className="">And so I'm offering this simple phrase, to kids from one to ninety-two. Although it's been said, many times, many ways, Merry Christmas, to you!</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="list-group">
                <div className="list-group-item p-3  bg-snow">
                  <h5 className="text-center mb-0 w-100">Recent Posts</h5>
                </div>
                <a href="" className="list-group-item">
                  <p className="mb-0">The Peace and Calm of Life <i className="fa fa-long-arrow-right"></i></p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
