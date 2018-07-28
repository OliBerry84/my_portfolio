import React, { Component } from 'react';

class Portfolio extends Component {

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {

    return (
      <div>

        <div className="topnav" id='mytopnav'>
          <a className='name' href='#projects'>Projects</a>
          <a className='name' href='#about-me'>About Me</a>
          <a className='name' href='#footer'>Contact</a>
        </div>

        <div className='intro-container'>
          <p className='intro-text'>I am an aspiring software developer, pursuing a career in Edinburgh, Scotland after completing a 16 week full stack course with the excellent people at CodeClan</p>
          <img className='cerberusimage' src={require('./images/cerberus.png')} alt='cerberusdesigns' />
        </div>

      </div>
    ); // return
  } // render
} // class


export default Portfolio;
