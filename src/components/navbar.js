import React, { Component } from 'react';
import '../css/navbar.css';

class Navbar extends Component {

  jumpTo(section){
    let div = document.getElementById(section);
    if(div !== null){
      let distanceToTop = div.getBoundingClientRect().top;
      window.scrollBy({
        top: distanceToTop - 50, // could be negative value
        left: 0,
        behavior: 'smooth'
      });
    }
    else{
      console.log('section not bound to ID')
    }
  }

  render() {
    return (
      <div className="Navbar">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
          <a className="navbar-brand"><i className="fas fa-road"/> New Island Highway</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" onClick={() => {this.jumpTo('About')}}>About</a>
              <a className="nav-item nav-link" onClick={() => {this.jumpTo('Plan')}}>The Plan</a>
              <a className="nav-item nav-link" onClick={() => {this.jumpTo('Vote')}}>Vote</a>
              <a className="nav-item nav-link" onClick={() => {this.jumpTo('Contact')}}>Get Involved</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
