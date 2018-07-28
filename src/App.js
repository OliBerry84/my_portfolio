import React, { Component } from 'react';
import Portfolio from './Portfolio.js';
import Projects from './Projects.js';
import About from './About.js';
import TopScroll from './TopScroll.js';
import Swupjs from 'swupjs';

class App extends Component {

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    let options = {}
    const swupjs = new Swupjs(options)

    return (
      <div>
        <Portfolio />
        <Projects />
        <About />
      </div>
    );
  }
}

export default App;
