import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo/lnl-logo-bw.svg";

class Header extends Component {
  render() {
    return (
      <Navbar className="p-3 bg-black">
        <NavbarBrand className="py-0 o-25">
          <img src={logo} style={{ width: "75px" }} alt="" />
        </NavbarBrand>
        <div>
          <FontAwesomeIcon icon={["fal", "copyright"]} className="mr-1" />
          Copyright 2019
        </div>
      </Navbar>
    );
  }
}

export default Header;
