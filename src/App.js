import React, { Component } from 'react';
import './css/App.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import TitleSection from "./components/titleSection";
import PlanSection from "./components/planSection";
import VoteSection from "./components/voteSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <TitleSection/>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 pl-0 pr-0'>
            <PlanSection/>
          </div>
        </div>
        <VoteSection/>
        <Footer/>
      </div>
    );
  }
}

export default App;
