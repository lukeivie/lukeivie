import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import liLogoWhite from '../assets/li-wordmark-white.svg';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header container-fluid bg-black d-block fixed-top o-hidden">
          <div className="container d-flex justify-content-between">
            <div className="header-logo d-inline-flex align-self-center">
              <NavLink to="/" ><img src={liLogoWhite} alt="Luke Ivie" className="nav-logo py-3" /></NavLink>
            </div>
            <div className="header-nav d-inline-flex">
              <NavLink exact to="/" activeClassName="active" className="nav-item text-uppercase ls-1 py-3 pl-2 pr-3 fw-9 text-italic align-self-center">Home</NavLink>
              <NavLink to="/about" activeClassName="active" className="nav-item text-uppercase ls-1 py-3 pl-2 pr-3 fw-9 text-italic align-self-center">About</NavLink>
              <NavLink to="/releases" activeClassName="active" className="nav-item text-uppercase ls-1 py-3 pl-2 pr-3 fw-9 text-italic align-self-center">Releases</NavLink>
              <NavLink to="/video" activeClassName="active" className="nav-item text-uppercase ls-1 py-3 pl-2 pr-3 fw-9 text-italic align-self-center">Video</NavLink>
              <NavLink to="/gallery" activeClassName="active" className="nav-item text-uppercase ls-1 py-3 pl-2 pr-3 fw-9 text-italic align-self-center">Gallery</NavLink>
              <NavLink to="/shop" activeClassName="active" className="nav-item text-uppercase ls-1 py-3 pl-2 pr-3 fw-9 text-italic align-self-center">Shop</NavLink>
              <NavLink to="/events" activeClassName="active" className="nav-item text-uppercase ls-1 py-3 pl-2 pr-3 fw-9 text-italic align-self-center">Events</NavLink>
              <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/33WLsuOJ1Hi5CnsY4a6Wv4" activeClassName="active" className="nav-item text-uppercase ls-1 py-3 pl-2 pr-3 fw-9 text-italic align-self-center"><i className="fa fa-spotify fs-24"></i></a>
            </div>
          </div>
        </div>
        <div className="margin-top"></div>
      </div>
    );
  }
}

export default Header;
