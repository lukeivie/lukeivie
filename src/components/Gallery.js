import React, { Component } from 'react';
import axios from 'axios';

class Gallery extends Component {
  getInitialState() {
    return {
      data: []
    }
  }
  componentDidMount() {
    var th = this;
    this.serverRequest =
      axios.get(this.props.source)
        .then(function(result) {
          th.setState({
            data: result.data.data
          });
        })
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
    return (
      <div className="text-white">
        <div className="container text-center py-5">
          {this.state.data.map(function(item) {
            return (
              <div key={item.url} className="item">
                <a href={item.link}>
                  <img src={item.images.low_resolution.url}/>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Gallery;
