import React, { Component } from 'react';
import '../css/about.css';

class About extends Component {
  render() {
    return (
      <div className="About" id='About'>
        <div className='row'>
        <div className='col text-left pt-4 pb-2 pl-4'>
          <h1 className='inline'>About</h1>
        </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 text-left p-4'>
            <h4>The Idea</h4>
            <p className='lead font-weight-normal'>We propose a new southern Vancouver Island highway, an alternative safer route to the Malahat to be the major highway for transportation on southern Vancouver Island. It would be the most direct route between Victoria and Nanaimo.
            </p>
            <p className='lead font-weight-normal'>
              Therefore shorter in distance, built at a lower elevation, less hills to climb in the winter, therefore safer.
            </p>
            <p className='lead font-weight-normal'>
              This would be better than building a new Malahat route and safer to the surrounding fresh water and salmon runs around Goldstream park.
            </p>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 text-left p-4'>
            <h4>The Details</h4>
            <p className='lead font-weight-normal'>Our proposed new south Vancouver Island highway would leave Victoria, along the Pat Bay highway, to the far end of Sannich peninsula, across to Salt Spring Island.
            </p>
            <p className='lead font-weight-normal'>
            The highway would follow along the Salt Spring land mass, coming back across the Sansum narrows proceeding just west of Maple Bay.
            </p>
            <p className='lead font-weight-normal'>
              Continuing on to join the Trans Canada Highway, just south of the Crofton tun off.
            </p>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 text-left p-4'>
            <h4>Failures of the Malahat</h4>
            <p className='lead font-weight-normal'>Collision History</p>
            <ul className="list ml-2">
              <li>The Aspen Road to Shawnigan Lake segment has had a collision rate of 0.45 collides per million vehicle kilometers which is higher than the provincial average of 0.32 collisions per million vehicle kilometers.</li>
              <li>Three fatalities have occurred along this section of the highway within the last 14 months.</li>
            </ul>
            <p className='lead font-weight-normal'>Reliability</p>
            <ul className="list ml-2">
              <li>The Malahat section of Highway 1 has a history of closures do to collisions and natural hazards. On average, the Malahat highway segment has unplanned closures 10.5 times per year.</li>
              <li>These closures are of great concern as no reasonable alternate detour routes are available south of Shawnigan Lake Road.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
