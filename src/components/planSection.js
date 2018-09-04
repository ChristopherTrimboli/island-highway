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
      <div className="PlanSection" id='Plan'>

        <div className='mapHolder pt-4 pb-4'>

          <div className='TenYearDiv' id='TenYearCard'>
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-tabs nav-fill">
                  <li className="nav-item" onClick={() => { this.changeMap('10Year') }}>
                    <a className="TenTab nav-link active">10 Year Plan</a>
                  </li>
                  <li className="nav-item" onClick={() => { this.changeMap('20Year') }}>
                    <a className="nav-link TwentyTab">20 Year Plan</a>
                  </li>
                  <li className="nav-item" onClick={() => { this.changeMap('50Year') }}>
                    <a className="nav-link FiftyTab">50 Year Plan</a>
                  </li>
                </ul>
              </div>
              <div className="card" >
                <div className='row'>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    <img className="card-img-top pt-3 pb-3" src={TenYear} alt="TenYear"/>
                  </div>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    <div className="card-body textSection">
                      <h1 className='p-1'><span className='TenHeader'>10</span> Year Plan</h1>
                      <div className='text-left'>
                        <p className="card-text lead font-weight-normal">This would be the, shortest, straightest, low altitude route between Victoria and Nanaimo. It would help to reduce the time to travel from Victoria to Nanaimo to one hour or less. </p>
                        <p className='card-text lead font-weight-normal'>Weather conditions of traveling at higher altitudes would not happen, there by reducing the number of accidents and deaths of going over the Malahat and other inland routes. this would also help to reduce the amount of fuel needed to travel between Victoria and Nanaimo.
                        </p>
                        <p className='card-text lead font-weight-normal'>This route also offers other long term planning possibilities for moving people and goods on southern Vancouver Island.
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='TwentyYearDiv' id='TwentyYearCard'>
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-tabs nav-fill">
                  <li className="nav-item" onClick={() => { this.changeMap('10Year') }}>
                    <a className="nav-link TenTab">10 Year Plan</a>
                  </li>
                  <li className="nav-item" onClick={() => { this.changeMap('20Year') }}>
                    <a className="nav-link active TwentyTab">20 Year Plan</a>
                  </li>
                  <li className="nav-item" onClick={() => { this.changeMap('50Year') }}>
                    <a className="nav-link FiftyTab">50 Year Plan</a>
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className='row'>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    <img className="card-img-top pt-3 pb-3" src={TwentyYear} alt="TwentyYear"/>
                  </div>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    <div className="card-body textSection">
                      <h1 className='p-1'><span className='TwentyHeader'>20</span> Year Plan</h1>
                      <div className='text-left'>
                        <p className='card-text lead font-weight-normal'>This could include, building a road, from new Island Highway Salt Spring Island Bridge route and a bridge from Salt Spring Island to Prevost Island to Galliano and then moving the ferry terminal from Swartz Bay to Galliano Island.
                        </p>
                        <p className='card-text lead font-weight-normal'> This would eliminate the ferries from having to go through the inside passage. This would reduce the ferry time from the terminal on Gallinao Island to one hour or less.
                        </p>
                        <p className='card-text lead font-weight-normal'> This would allow B.C. Ferries to handle the future increased demand on this mainland route with fewer Ferries thus keeping Ferry cost down.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='FiftyYearDiv' id='FiftyYearCard'>
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-tabs nav-fill">
                  <li className="nav-item" onClick={() => { this.changeMap('10Year') }}>
                    <a className="nav-link TenTab">10 Year Plan</a>
                  </li>
                  <li className="nav-item" onClick={() => { this.changeMap('20Year') }}>
                    <a className="nav-link TwentyTab">20 Year Plan</a>
                  </li>
                  <li className="nav-item" onClick={() => { this.changeMap('50Year') }}>
                    <a className="nav-link active FiftyTab">50 Year Plan</a>
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className='row'>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    <img className="card-img-top pt-3 pb-3" src={FiftyYear} alt="FiftyYear"/>
                  </div>
                  <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    <div className="card-body textSection">
                      <h1 className='p-1'><span className='FiftyHeader'>50</span> Year Plan</h1>
                      <div className='text-left'>
                        <p className='card-text lead font-weight-normal'>This could include the building of a bridge, tunnel or some sort of solid connector, to join Vancouver Island and the lower mainland together.
                        </p>
                        <p className='card-text lead font-weight-normal'>If a southern route between Vancouver Island and the mainland is to be considered, then a bridge from Salt Spring Island to Prevost Island to Galliano Island would make the most sense.
                        </p>
                        <p className='card-text lead font-weight-normal'>If this route was already built to mode the ferry terminal , then the infrastructure route would already be in place on the Vancouver Island side.
                        </p>
                      </div>
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
