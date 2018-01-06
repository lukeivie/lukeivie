import React, { Component } from 'react';
import artistPhoto from '../assets/artist_photo.jpg';

class About extends Component {
  render() {
    return (
      <div className="text-white">
        <div className="container text-center py-5">
          <div className="row">
            <div className="col-4">
              <img className="img-fluid rounded-circle" src={artistPhoto} alt=""/>
            </div>
            <div className="col-8 text-left">
              <h4 className="text-italic fw-9">Bio</h4>
              <p className="">Luke Ivie is a designer, developer, music artist, producer, and entrepreneur.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
