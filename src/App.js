import React, { Component } from 'react';
import './css/App.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import TitleSection from "./components/titleSection";
import PlanSection from "./components/planSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Footer/>
        <TitleSection/>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <PlanSection/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
