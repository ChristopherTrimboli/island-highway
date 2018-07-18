import React, { Component } from 'react';
import '../css/planSection.css';
import TenYear from '../images/10Year.png'
import TwentyYear from '../images/20Year.png'
import FiftyYear from '../images/50Year.png'

class PlanSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapShown: "10Year"
    };
    this.changeMap = this.changeMap.bind(this)
  }

  changeMap(map) {
    this.setState({
      siteShown: map
    });

    const TenYearDiv = document.getElementById('TenYearCard');
    const TwentyYearDiv = document.getElementById('TwentyYearCard');
    const FiftyYearDiv = document.getElementById('FiftyYearCard');

    if(map === '10Year'){
      TenYearDiv.hidden = false;
      TwentyYearDiv.hidden = true;
      FiftyYearDiv.hidden = true;
    }
    if(map === '20Year'){
      TenYearDiv.hidden = true;
      TwentyYearDiv.hidden = false;
      FiftyYearDiv.hidden = true;
    }
    if(map === '50Year'){
      TenYearDiv.hidden = true;
      TwentyYearDiv.hidden = true;
      FiftyYearDiv.hidden = false;
    }
  }

  componentDidMount(){
    const TenYearDiv = document.getElementById('TenYearCard');
    const TwentyYearDiv = document.getElementById('TwentyYearCard');
    const FiftyYearDiv = document.getElementById('FiftyYearCard');
    TenYearDiv.hidden = false;
    TwentyYearDiv.hidden = true;
    FiftyYearDiv.hidden = true;
  }

  render() {
    return (
      <div className="PlanSection">

        <div className='mapHolder pt-4 pb-4'>

          <div className='TenYearDiv' id='TenYearCard'>
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item" onClick={() => { this.changeMap('10Year') }}>
                    <a className="nav-link active">10 Year Plan</a>
                  </li>
                  <li className="nav-item" onClick={() => { this.changeMap('20Year') }}>
                    <a className="nav-link">20 Year Plan</a>
                  </li>
                  <li className="nav-item" onClick={() => { this.changeMap('50Year') }}>
                    <a className="nav-link">50 Year Plan</a>
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className='row'>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    <img className="card-img-top pt-3 pb-3" src={TenYear} alt="TenYear"/>
                  </div>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    <div className="card-body">
                      <h2>10 Year Plan</h2>
                      <p className="card-text">Explain the plan for the 10 year bridge.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='TwentyYearDiv' id='TwentyYearCard'>
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item" onClick={() => { this.changeMap('10Year') }}>
                    <a className="nav-link">10 Year Plan</a>
                  </li>
                  <li className="nav-item" onClick={() => { this.changeMap('20Year') }}>
                    <a className="nav-link active">20 Year Plan</a>
                  </li>
                  <li className="nav-item" onClick={() => { this.changeMap('50Year') }}>
                    <a className="nav-link">50 Year Plan</a>
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className='row'>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    <img className="card-img-top pt-3 pb-3" src={TwentyYear} alt="TwentyYear"/>
                  </div>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    <div className="card-body">
                      <h2>20 Year Plan</h2>
                      <p className="card-text">Explain the plan for the 20 year bridge.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='FiftyYearDiv' id='FiftyYearCard'>
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item" onClick={() => { this.changeMap('10Year') }}>
                    <a className="nav-link">10 Year Plan</a>
                  </li>
                  <li className="nav-item" onClick={() => { this.changeMap('20Year') }}>
                    <a className="nav-link">20 Year Plan</a>
                  </li>
                  <li className="nav-item" onClick={() => { this.changeMap('50Year') }}>
                    <a className="nav-link active">50 Year Plan</a>
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className='row'>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    <img className="card-img-top pt-3 pb-3" src={FiftyYear} alt="FiftyYear"/>
                  </div>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    <div className="card-body">
                      <h2>50 Year Plan</h2>
                      <p className="card-text">Explain the plan for the 50 year bridge.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlanSection;
