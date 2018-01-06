import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Home from '../components/Home.js';
import Video from '../components/Video.js';
import Releases from '../components/Releases.js';
import Gallery from '../components/Gallery.js';
import About from '../components/About.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container-fluid px-0 d-block text-white text-center px-3 py-0 bg-yl-photo" style={{minHeight: "600px"}}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/video" component={Video}></Route>
            <Route exact path="/releases" component={Releases}></Route>
            <Route exact path="/gallery" render={(props) => ( <Gallery source="https://gist.githubusercontent.com/mgcm/4d4ddf687b1399b87de4/raw/530bbf6f6665c9cf9263fea9c6577f85b3bf280b/instagram.json"/> )} />
            <Route exact path="/about" component={About}></Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
