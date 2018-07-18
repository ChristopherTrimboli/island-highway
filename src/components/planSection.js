import React, { Component } from 'react';
import '../css/planSection.css';

class PlanSection extends Component {
  render() {
    return (
      <div className="PlanSection">
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#">10 Year Plan</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">20 Year Plan</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">50 Year Plan</a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h5 className="card-title">Map will be here</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    );
  }
}

export default PlanSection;
