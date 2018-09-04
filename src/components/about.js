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
            <p className='lead font-weight-normal'>We propose a new southern Vancouver Island highway, an alternative safer route to the Malahat. To be the major highway for transportation on southern Vancouver Island. It would be the most direct route between Victoria and Nanaimo.
            </p>
            <p className='lead font-weight-normal'>
              Therefore shorter in distance, built at a lower elevation, less hills to climb in the winter, therefore safer. This would be better than building a new Malahat route and safer to the surrounding fresh water and salmon runs around Goldstream park.
            </p>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 text-left p-4'>
            <h4>The Details</h4>
            <p className='lead font-weight-normal'>Our proposed new south Vancouver Island highway would leave Victoria, along the Pat Bay highway, to the far end of Sannich peninsula, across to Salt Spring Island
            </p>
            <p className='lead font-weight-normal'>
            The highway would follow along the Salt Spring land mass, coming back across the Sansum narrows proceeding just west of Maple Bay and continuing on to join the Trans Canada Highway, just south of the Crofton tun off.
            </p>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 text-left p-4'>
            <h4>Paragraph Heading</h4>
            <p className='lead font-weight-normal'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
            <p className='lead font-weight-normal'>
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
