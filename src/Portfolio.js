import React, {Component} from 'react';
import TopScroll from './TopScroll.js';
import Swupjs from 'swupjs';

class Portfolio extends Component{
  constructor(props) {
    super(props);

    this.topFunction = this.topFunction.bind(this)

  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    let options = {}
    const swupjs = new Swupjs(options)

    return (
      <div>

        <div className="topnav">
          <p className = 'my-name'>Oliver Berry</p>
          <a className = 'name' href='#projects'>Projects</a>
          <a className = 'name' href='#about-me'>About Me</a>
          <a className = 'name' href='#footer'>Contact</a>
        </div>
        
        <div className = 'intro-container'>
          <p className = 'intro-text'>I am an aspiring front end developer/web designer, pursuing a career in Edinburgh, Scotland after completing a 16 week full stack course with the excellent people at CodeClan</p>
          <img className = 'cerberusimage' src={require('./images/cerberus.png')} alt='cerberusdesigns'/>
        </div>

        <div id='projects' className='projects'>Projects</div>
        <div className = 'projects-container'>
          <div className = 'rubyproject'>
            <input type='image' className = 'rubyimage' src={require('./images/giggity_records.png')} alt='rubyproject' name = 'submit'/>
            <p>A CodeClan Ruby project</p>
            <p>Designing a Record Store management console</p>
            <p><a href="https://github.com/OliBerry84/RubyProject" target="_blank"><img className = 'links' src={require('./images/github.png')} alt='instagram'/></a>
          </p>
        </div>

        <div className = 'javaproject'>
          <input type='image' className = 'javaimage' src={require('./images/android.png')} alt='androidimage'/>
          <p>A CodeClan Android/Java project</p>
          <p>Create a functioning To-Do list application for android devices</p>
          <p><a href="https://github.com/OliBerry84/androidToDoListProject" target="_blank"><img className = 'links' src={require('./images/github.png')} alt='instagram'/></a>
        </p>
      </div>

      <div className = 'javascriptproject'>
        <input type='image' className = 'javascriptimage' src={require('./images/love_letter.png')} alt='loveletterimage'/>
        <p>The CodeClan JavaScript group project</p>
        <p>Based on the card game "LoveLetter", designed and implemented a functional 4 player version of the game</p>
        <p><a href="https://github.com/OliBerry84/Love_Letter_JS_group_Project" target="_blank"><img className = 'links' src={require('./images/github.png')} alt='instagram'/></a>
      </p>
    </div>

    <div className = 'websiteproject'>
      <input type='image' className = 'websiteimage' src={require('./images/portfolio.png')} alt='websiteprojectimage'/>
      <p>My CodeClan individual project</p>
      <p>My individual project to create my own portfolio</p>
    </div>

    <div className = 'whereintheworld'>
      <a href="https://where-in-the-world.glitch.me/" target="_blank"> <img className = 'whereintheworldimage' src={require('./images/whereintheworld.png')} alt='whereintheworld'/></a>
      <p>Paired programming lab collaboration</p>
      <p>Using the Google Maps API and displaying data</p>
      <p>Click the image to link to the site</p>
    </div>
  </div>

  <div id='about-me' className='about-me'>About Me</div>
  <div className = 'about'>
    <p>I have a degree in Business & Accounting but soon decided that it was not for me so I dived headfirst into a full stack coding bootcamp with CodeClan in Edinburgh. During my time there, my passion for front end and design flourished and now I aim to move into that sector and continue my development.</p>
    <p>When I'm not busy on the computer I like to play and watch football(I'm a Fulham fan for all my sins), an avid gamer and also enjoy weekends watching MotoGP and UFC when the time allows.</p>
  </div>


  <footer id='footer' className = 'footer'>
    <div className = 'contact'>
      <p>Oliver Berry</p>
      <p>Edinburgh</p>
      <p>Scotland</p>
      <div>
        <a href="mailto:oliverberry84@gmail.com?Subject=Enquiry"><img className = 'links' src={require('./images/email.png')} alt='email'/></a>

        <a href="https://www.linkedin.com/in/oliver-berry-748a8490/" target="_blank"><img className = 'links' src={require('./images/linkedin.png')} alt='linkedIn'/></a>

        <a href="https://github.com/OliBerry84" target="_blank"><img className = 'links' src={require('./images/github.png')} alt='instagram'/></a>

        <a href="https://www.instagram.com/oli.berry/" target="_blank"><img className = 'links' src={require('./images/instagram.png')} alt='instagram'/></a>
      </div>
      <button onClick={this.topFunction} className="topbutton" id="topbutton" title="Return to the top">Return to Top</button>
    </div>
  </footer>
</div>
); // return
} // render
} // class


export default Portfolio;
