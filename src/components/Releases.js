import React, { Component } from 'react';
import SocialLinks from '../components/SocialLinks.js';

import coolDayArtwork from '../assets/cool_day_final.jpg';
import rainyNightArtwork from '../assets/rainy_night_final.jpg';
import boundariesArtwork from '../assets/boundaries_final.jpg';
import timeToMyselfArtwork from '../assets/time_to_myself_final.jpg';
import betterArtwork from '../assets/better_final.jpg';

class Releases extends Component {
  render() {
    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-md-4">
            <img className="w-100" src={coolDayArtwork} alt=""/>
            <div className="w-100 mx-auto mb-5">
              <iframe title="cool-day" className="spotify-embed" src="https://open.spotify.com/embed?uri=spotify:track:196L0hw2K6YaCOYpE3fIy2" width="100%" height="84" frameborder="0" allowtransparency="true"></iframe>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <img className="w-100" src={rainyNightArtwork} alt=""/>
            <div className="w-100 mx-auto mb-5">
              <iframe title="rainy-night" className="spotify-embed" src="https://open.spotify.com/embed?uri=spotify:track:4yPRVf6Heyxl8wH2kwbiXR" width="100%" height="84" frameborder="0" allowtransparency="true"></iframe>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <img className="w-100" src={boundariesArtwork} alt=""/>
            <div className="w-100 mx-auto mb-5">
              <iframe title="boundaries" className="spotify-embed" src="https://open.spotify.com/embed?uri=spotify:track:5yaklLmEBTsV36GAK6to8v" width="100%" height="84" frameborder="0" allowtransparency="true"></iframe>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <img className="w-100" src={timeToMyselfArtwork} alt=""/>
            <div className="w-100 mx-auto mb-5">
              <iframe title="time-to-myself" className="spotify-embed" src="https://open.spotify.com/embed?uri=spotify:track:4X9jAwqVCdPAFEUWgI1KVf" width="100%" height="84" frameborder="0" allowtransparency="true"></iframe>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <img className="w-100" src={betterArtwork} alt=""/>
            <div className="w-100 mx-auto pb-5">
              <iframe title="better" className="spotify-embed" src="https://open.spotify.com/embed?uri=spotify:track:5syKrTHgdtUD5dZ9HYegze" width="100%" height="84" frameborder="0" allowtransparency="true"></iframe>
            </div>
          </div>
        </div>
        <div className="pb-3">
          <SocialLinks/>
        </div>
      </div>
    );
  }
}

export default Releases;
