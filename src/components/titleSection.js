import React, { Component } from 'react';
import '../css/titleSection.css';

class TitleSection extends Component {

  jumpTo(section){
    let div = document.getElementById(section);
    if(div !== null){
      let distanceToTop = div.getBoundingClientRect().top;
      window.scrollBy({
        top: distanceToTop - 50, // could be negative value
        left: 0,
        behavior: 'smooth'
      });
    }
    else{
      console.log('section not bound to ID')
    }
  }

  render() {
    return (
      <div className="TitleSection">
        <div className="jumbotron">
          <div className='jumboInner'>
            <h1 className="display-4">An Alternate Vancouver Island Highway</h1>
            <p className="lead pt-3">The Malahat highway has proved dangerous and expensive...</p>
          <p className='lead'>But still, our government's best idea is to continue expanding the Malahat.</p>
            <hr className="my-4"/>
            <h3>Shorter &#8722; Straighter &#8722; Safer</h3>
            <p>This website covers the 10, 20 and 50 year plans for a safer, easier and more functional highway system.</p>
            <p>Let your opinion be heard! Leave a simple 'yes' or 'no' vote.</p>
            <a className="btn btn-primary btn-lg mr-2 ml-2 mt-3" role="button" onClick={() => {this.jumpTo('Plan')}}>The Plans</a>
            <a className="btn btn-info btn-lg mt-3" role="button" onClick={() => {this.jumpTo('Vote')}}>Vote Now</a>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleSection;
