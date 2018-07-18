import React, { Component } from 'react';

import '../css/voteSection.css';
import background from '../images/rocks.jpg';
import VotesJSON from '../voteCounter';


class VoteSection extends Component {

  // constructor(props){
  //   super(props);
  //   let votes = VotesJSON;
  //   console.log(votes['Votes']);
  //   this.updateVotes = this.updateVotes.bind(this)  }
  //
  //
  // updateVotes(choice){
  //   const fs = require('fs');
  //   let vote = JSON.stringify(choice);
  //   console.log(choice);
  // }

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };


  render() {
    return (
      <div className="VoteSection">
        <div className="card mb-3">
          <img className="card-img-top" src={background} alt="background"/>
            <div className="card-body">
              <h5 className="card-title">Make your Vote heard!</h5>
              <p className="card-text">This will be where the vote counter is.</p>

              <button type="button" className="btn btn-primary m-3" onClick={() => { this.updateVotes('yes') }}>Yes</button>

              <button type="button" className="btn btn-danger m-3" onClick={() => { this.updateVotes('no') }}>No</button>

              <h1>{this.state.response}</h1>

              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
        </div>
      </div>
    );
  }
}

export default VoteSection;
