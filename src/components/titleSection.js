import React, { Component } from 'react';
import '../css/titleSection.css';

class TitleSection extends Component {
  render() {
    return (
      <div className="TitleSection">
        <div className="jumbotron">
          <div className='jumboInner'>
            <h1 className="display-4">An Alternate Vancouver Island Highway</h1>
            <p className="lead">The Malahat highway has proved dangerous and expensive. But still, our government's best idea is to continue expanding its madness.</p>
            <hr className="my-4"/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleSection;
