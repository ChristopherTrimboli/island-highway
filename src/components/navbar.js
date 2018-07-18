import React, { Component } from 'react';
import '../css/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand">New Island Highway</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link">About</a>
              <a className="nav-item nav-link">The Plan</a>
              <a className="nav-item nav-link">Vote</a>
              <a className="nav-item nav-link">Get Involved</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
