import React, { Component } from 'react';

class Shop extends Component {
  render() {
    return (
      <div className="text-white" style={{minHeight: "700px", background: "url('https://static.pexels.com/photos/268759/pexels-photo-268759.jpeg')", backgroundAttachment: "fixed", backgroundSize: "cover", boxShadow: "inset 0px 0px 0px 10000px rgba(0,0,0,0.50)"}}>
        <div className="container text-center py-5 d-flex" style={{height: "70vh"}}>
          <div className="d-flex align-self-center justify-content-center flex-column mx-auto">
            <h1 className="text-white">Coming Soon</h1>
            <p className="w-50 mx-auto mb-0">The Young Luke Merch Shop is launching soon. Become a VIP and be notified as soon as it launches.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
