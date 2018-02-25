import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Home from '../components/Home.js';
import Video from '../components/Video.js';
import Listen from '../components/Listen.js';
import Gallery from '../components/Gallery.js';
import Shop from '../components/Shop.js';
import About from '../components/About.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container-fluid px-0 d-block text-white text-center py-0" style={{minHeight: "700px"}}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/listen" component={Listen}></Route>
            <Route path="/video" component={Video}></Route>
            <Route path="/gallery" component={Gallery} />
            <Route path="/shop" component={Shop} />
            <Route path="/about" component={About}></Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
