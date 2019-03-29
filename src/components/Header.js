import React, { Component } from "react";
import { Navbar, NavbarBrand, NavLink, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo/lnl-logo.svg";

class Header extends Component {
  render() {
    return (
      <Navbar className="p-3" fixed="top">
        <NavbarBrand className="py-0">
          <img src={logo} style={{ width: "75px" }} alt="" />
        </NavbarBrand>
        {/* <div className="text-white text-uppercase font-italic letter-spacing-2">
          Late Night Luke
        </div> */}
        <Button color="primary" outline>
          <FontAwesomeIcon icon={["fal", "mobile-android"]} className="mr-1" />{" "}
          Call Me
        </Button>
      </Navbar>
    );
  }
}

export default Header;
