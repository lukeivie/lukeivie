import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import LiLogoWhite from '../assets/li-wordmark-white.svg';
// import Palm from '../assets/palm-2.svg';

class Header extends Component {
  render() {
    return (
      <div className="bg-black">
        <div className="header container-fluid d-block fixed-top o-hidden">
          <div className="container d-flex justify-content-md-between  justify-content-center text-md-left text-center">
            <div className="header-logo d-inline-flex align-self-center">
              <NavLink to="/" >
              {/* <img src={Palm} style={{height: "35px"}} className="mr-2" alt=""/> */}
              <img src={LiLogoWhite} alt="Luke Ivie" className="nav-logo py-3" /></NavLink>
            </div>
            <div className="header-nav d-inline-flex hidden-sm-down">
              <NavLink exact to="/" activeClassName="active" className="nav-item text-uppercase ls-1 py-3 pl-2 pr-3 text-italic fw-bold align-self-center">Home</NavLink>
              <NavLink to="/about" activeClassName="active" className="nav-item text-uppercase ls-1 py-3 pl-2 pr-3 text-italic fw-bold align-self-center">About</NavLink>
              <NavLink to="/listen" activeClassName="active" className="nav-item text-uppercase ls-1 py-3 pl-2 pr-3 text-italic fw-bold align-self-center">Listen</NavLink>
              <NavLink to="/video" activeClassName="active" className="nav-item text-uppercase ls-1 py-3 pl-2 pr-3 text-italic fw-bold align-self-center">Video</NavLink>
              <NavLink to="/gallery" activeClassName="active" className="nav-item text-uppercase ls-1 py-3 pl-2 pr-3 text-italic fw-bold align-self-center">Gallery</NavLink>
              <NavLink to="/shop" activeClassName="active" className="nav-item text-uppercase ls-1 py-3 pl-2 pr-3 text-italic fw-bold align-self-center">Shop</NavLink>
              <NavLink to="/events" activeClassName="active" className="nav-item text-uppercase ls-1 py-3 pl-2 pr-3 text-italic fw-bold align-self-center">Events</NavLink>
              <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/33WLsuOJ1Hi5CnsY4a6Wv4" activeClassName="active" className="nav-item text-uppercase ls-1 py-3 pl-2 pr-3 text-italic fw-bold align-self-center"><i className="fa fa-spotify fs-lg"></i></a>
            </div>
          </div>
        </div>
        <div className="margin-top"></div>
      </div>
    );
  }
}

export default Header;
