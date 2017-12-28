import React, { Component } from 'react';
import liLogoWhite from '../assets/li-wordmark-white.svg';
import coolDayArtwork from '../assets/cool_day_final.jpg';
import rainyNightArtwork from '../assets/rainy_night_final.jpg';
import boundariesArtwork from '../assets/boundaries_final.jpg';
import timeToMyselfArtwork from '../assets/time_to_myself_final.jpg';
import betterArtwork from '../assets/better_final.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header container-fluid bg-black d-block text-center justify-content-center p-3 fixed-top">
          <a href="/"><img src={liLogoWhite} alt="" style={{width: "175px"}}/></a>
        </div>
        <div className="container-fluid px-0 d-block text-white text-center px-3 py-0 bg-yl-photo" style={{minHeight: "1000px"}}>
          <div className="margin-top"></div>
          <div className="col-12 col-md-6 mx-auto text-white py-5 px-0">
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
          <img className="col-12 col-md-6" src={coolDayArtwork} alt=""/>
          <div className="col-12 col-md-6 mx-auto mb-5">
            <iframe title="cool-day" className="spotify-embed" src="https://open.spotify.com/embed?uri=spotify:track:196L0hw2K6YaCOYpE3fIy2" width="100%" height="84" frameborder="0" allowtransparency="true"></iframe>
          </div>
          <img className="col-12 col-md-6" src={rainyNightArtwork} alt=""/>
          <div className="col-12 col-md-6 mx-auto mb-5">
            <iframe title="rainy-night" className="spotify-embed" src="https://open.spotify.com/embed?uri=spotify:track:4yPRVf6Heyxl8wH2kwbiXR" width="100%" height="84" frameborder="0" allowtransparency="true"></iframe>
          </div>
          <img className="col-12 col-md-6" src={boundariesArtwork} alt=""/>
          <div className="col-12 col-md-6 mx-auto mb-5">
            <iframe title="boundaries" className="spotify-embed" src="https://open.spotify.com/embed?uri=spotify:track:5yaklLmEBTsV36GAK6to8v" width="100%" height="84" frameborder="0" allowtransparency="true"></iframe>
          </div>
          <img className="col-12 col-md-6" src={timeToMyselfArtwork} alt=""/>
          <div className="col-12 col-md-6 mx-auto mb-5">
            <iframe title="time-to-myself" className="spotify-embed" src="https://open.spotify.com/embed?uri=spotify:track:4X9jAwqVCdPAFEUWgI1KVf" width="100%" height="84" frameborder="0" allowtransparency="true"></iframe>
          </div>
          <img className="col-12 col-md-6" src={betterArtwork} alt=""/>
          <div className="col-12 col-md-6 mx-auto mb-5">
            <iframe title="better" className="spotify-embed" src="https://open.spotify.com/embed?uri=spotify:track:5syKrTHgdtUD5dZ9HYegze" width="100%" height="84" frameborder="0" allowtransparency="true"></iframe>
          </div>
        </div>
        <div className="header container-fluid bg-black d-block text-center justify-content-center p-2 text-pebble fs-14 fw-6">
          <i>&copy; 2017 Attalia LLC</i>
        </div>
      </div>
    );
  }
}

export default App;
