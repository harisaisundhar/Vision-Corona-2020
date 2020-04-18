import React from 'react';

class Tracker extends React.Component {

    render() {
        require('../assets/css/err.css')
        return (
            <div>
            <nav className="shelf">
              <a className="book home-page">Home page</a>
              <a className="book about-us">About us</a>
              <a className="book contact">Contact</a>
              <a className="book faq">F.A.Q.</a>
              <span className="book not-found" />
              <span className="door left" />
              <span className="door right" />
            </nav>
            <h1>Error 404</h1>
            <p>The page you're loking for can't be found</p>
          </div>
          );
    }
}

export default Tracker;
