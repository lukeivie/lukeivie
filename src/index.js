import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="p-3 p-md-5">
          <h1 style={{color: "white"}}>
            <span role="img" aria-labelledby="palm">🌴</span><br/>
            Coming Soon
          </h1>
          <p style={{color: "white", opacity: "0.75", fontSize: "16px"}}>
            My site is currently under construction... follow me below to know when it goes live!
          </p>
          <p>
            <a href="http://www.github.com/lukeivie" className="link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github mr-3" />
            </a>
            <a href="http://www.instagram.com/lukeivie" className="link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram mr-3" />
            </a>
            <a href="https://dribbble.com/lukeivie" className="link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-dribbble" />
            </a>
          </p>
        </div>
        <div className="fixed-bottom p-2 font-italic" style={{color: "white", fontSize: "16px", opacity: "0.25"}}>
          &copy; 2018 Luke Ivie
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>
, document.getElementById('root'));
