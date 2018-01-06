import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <div className="text-white">
        <div className="container text-center py-5">
          <iframe className="youtube-embed" src="https://www.youtube.com/embed/8GBqIXfV5A0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

export default Video;
