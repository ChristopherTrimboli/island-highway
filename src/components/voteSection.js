import React, { Component } from 'react';
import '../css/voteSection.css';
import firebase from "firebase";

class VoteSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noVotes: "",
      yesVotes: ""
    };
    this.getVotes = this.getVotes.bind(this);
  }

  componentDidMount(){
    this.getVotes()
  }

  getVotes(){
    const config = {
      apiKey: "AIzaSyBRoCF05syj98wyzInngl3ZTK3OzTgOv0M",
      authDomain: "new-island-highway.firebaseapp.com",
      databaseURL: "https://new-island-highway.firebaseio.com",
      storageBucket: "new-island-highway.appspot.com"
    };
    firebase.initializeApp(config);

    const noRef = firebase.database().refFromURL('https://new-island-highway.firebaseio.com/no');
    const yesRef = firebase.database().refFromURL('https://new-island-highway.firebaseio.com/yes');

    noRef.once('value', (snapshot) => {
      let noVotes = snapshot.val();
      this.setState({
        noVotes: noVotes,
      });
    });

    yesRef.once('value', (snapshot) => {
      let yesVotes = snapshot.val();
      this.setState({
        yesVotes: yesVotes,
      });
    });

  }

  updateVotes(choice){
    const noRef = firebase.database().refFromURL('https://new-island-highway.firebaseio.com/no');
    const yesRef = firebase.database().refFromURL('https://new-island-highway.firebaseio.com/yes');

    if(choice === 'no'){
      const noVotes = {
        noVotes: this.state.noVotes + 1,
      };
      noRef.set(noVotes.noVotes);
      this.setState({
        noVotes: this.state.noVotes + 1
      });
    }

    if(choice === 'yes'){
      const yesVotes = {
        yesVotes: this.state.yesVotes + 1,
      };
      yesRef.set(yesVotes.yesVotes);
      this.setState({
        yesVotes: this.state.yesVotes + 1
      });
    }
  }

  render() {
    return (
      <div className="VoteSection" id='Vote'>
        <div className="card mb-3">
            <div className="card-body">
              <h3 className="card-title pb-3">Make your Vote heard!</h3>
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0 fa-4x'>
                  <i className="fas fa-user-friends"/>
                </div>
              </div>
              <div className='row p-3'>
                <div className='column col-lg-6 col-md-6 col-sm-6 col-xs-6 p-0'>
                  <h1 className='noCounter'>{this.state.noVotes}</h1>
                  <hr/>
                  <p>Votes for: "<span className='noSpan'>No</span>"</p>
                  <button type="button" className="btn btn-danger m-3" onClick={() => { this.updateVotes('no') }}>Vote No</button>
                </div>
                <div className='column col-lg-6 col-md-6 col-sm-6 col-xs-6 p-0'>
                  <h1 className='yesCounter'>{this.state.yesVotes}</h1>
                  <hr/>
                  <p>Votes for: "<span className='yesSpan'>Yes</span>"</p>
                  <button type="button" className="btn btn-success m-3" onClick={() => { this.updateVotes('yes') }}>Vote Yes</button>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <small className="text-muted">Votes data from realtime Firebase database</small>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default VoteSection;
