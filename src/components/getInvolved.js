import React, { Component } from 'react';
import '../css/getInvolved.css';

class GetInvolved extends Component {
  render() {
    return (
      <div className="GetInvolved">
        <div className='row pt-5 pb-3'>
          <div className='col-12'>
            <i className="far fa-comments fa-4x pt-3"/>
            <h1 className='pt-5'>Get Involved</h1>
          </div>
          <div className='col-12'>
            <h4 className='pt-3'>Send us your comments!</h4>
          </div>
          <div className='col-12 pt-5'>
            <a href='mailto:newsouthvancouverislandhwy@shaw.ca'>
              <i className="far fa-envelope fa-2x p-3"/>
              <h5 className='pb-5'>newsouthvancouverislandhwy@shaw.ca</h5>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default GetInvolved;
