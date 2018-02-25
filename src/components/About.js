import React, { Component } from 'react';
// import artistPhoto from '../assets/artist_photo.jpg';

class About extends Component {
  render() {
    return (
      <div className="text-white" style={{position: "relative", height: "450px"}}>
        <div className="bg-yl-photo" style={{position: "absolute", top: 0, left: 0, right: 0, height: "450px", maxHeight: "450px"}}></div>
        <div style={{width: "100%", height: "35px", background: "linear-gradient(transparent, black)", position: "absolute", left: 0, right: 0, bottom: 0}}></div>
        <div className="container text-center py-5">
          <div className="row">
            {/* <div className="col-4">
              <img className="img-fluid rounded-circle" src={artistPhoto} alt=""/>
            </div>
            <div className="col-8 text-left">
              <h4 className="text-italic fw-9">Bio</h4>
              <p className="">Luke Ivie is a designer, developer, music artist, producer, and entrepreneur.</p>
            </div> */}
            <div className="col-12 bg-black br-lg p-5 bs-sm text-cloud mt-5">
              <h2 className="fw-black">You're On The Late Night</h2>
              <p className="w-75 mx-auto mb-5 fs-md">Get exclusive access to all of the latest Young Luke content, complete with backstage passes, photos, videos, etc. Get exclusive access to all of the latest Young Luke content, complete with backstage passes, photos, videos, etc. Get exclusive access to all of the latest Young Luke content, complete with backstage passes, photos, videos, etc.</p>
              <button className="btn btn-primary btn-lg">Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    document.title = "About | Young Luke";
  }
}

export default About;
