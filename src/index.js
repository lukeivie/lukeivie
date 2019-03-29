import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Panel from "./components/Panel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "@fortawesome/fontawesome-pro/js/all.js";
import "bootstrap/scss/bootstrap.scss";
import "./styles/index.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Panel background="black">
          <div className="w-100 d-flex align-items-center justify-content-center flex-column">
            <h1 className="text-white align-self-center text-uppercase font-italic font-weight-bold letter-spacing-2">
              <FontAwesomeIcon
                icon={["fas", "moon-stars"]}
                className="text-secondary"
              />{" "}
              Late Night Luke
            </h1>
            <p className="text-white o-75">
              Taste over trends. Functionality over aesthetic. Simple over
              complex.
            </p>
          </div>
        </Panel>
        <Panel background="90s">
          <div className="p-5 w-100 d-flex align-items-center justify-content-center">
            <div className="bg-white rounded align-self-center justify-self-center px-3 py-2">
              Late Night Luke
            </div>
          </div>
        </Panel>
        <Footer />
        {/* <Container
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ height: "100vh" }}
        > */}
        {/* <h1 className="display-4 text-white">Late Night Luke</h1>
          <br />
          <p className="text-white">
            I don't believe in following trends, I believe in doing things with
            style and taste. Be different.
          </p> */}
        {/* </Container> */}
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
