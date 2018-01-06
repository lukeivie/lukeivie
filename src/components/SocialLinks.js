import React, { Component } from 'react';

class SocialLinks extends Component {
  render() {
    return (
      <div className="pb-5">
        <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/33WLsuOJ1Hi5CnsY4a6Wv4" className="social-link">
          <i className="fa fa-spotify fa-2x mr-3"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/younglukemusic" className="social-link">
          <i className="fa fa-soundcloud fa-2x mr-3"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=8GBqIXfV5A0" className="social-link">
          <i className="fa fa-youtube fa-2x mr-3"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/vn/artist/young-luke/985557790" className="social-link">
          <i className="fa fa-apple fa-2x mr-3"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lukeivie/" className="social-link">
          <i className="fa fa-instagram fa-2x mr-3"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/YoungLukeMusic" className="social-link">
          <i className="fa fa-twitter fa-2x"></i>
        </a>
      </div>
    );
  }
}

export default SocialLinks;
