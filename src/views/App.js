import React, { Component } from 'react';
import logo from '../assets/logo.svg';
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
      <div>
        <div className="container-fluid bg-black text-center justify-content-center fixed-top p-2">
          <h4 className="text-white text-uppercase-title mb-0">Luke Ivie</h4>
        </div>
        <div className="container-fluid bg-carbon text-center justify-content-center p-5" style={{marginTop: "42px"}}>
          <img className="yl-logo" style={{width: "200px"}} src={logo} alt="luke_ivie_logo" />
        </div>
        <div className="container pt-5">
          <div className="row">
            <div className="col-6">
              <h3 className="text-white"><i className="fa fa-moon-o mr-2"></i> Good Evening</h3>
              <p className="text-pebble">You're on the late night</p>
            </div>
            <div className="col-6">
              <iframe className="mb-3" src="https://open.spotify.com/follow/1/?uri=spotify:artist:33WLsuOJ1Hi5CnsY4a6Wv4&size=detail&theme=dark" width="300" height="56" scrolling="no" frameborder="0" style={{border: "none", overflow: "hidden"}} allowtransparency="true"></iframe>
              <SpotifyPlayer
                uri="spotify:album:0cAMrlfKVijbdIVd1lnzRv"
                size={size}
                view={view}
                theme={theme}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
