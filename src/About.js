import React, {Component} from 'react';

class About extends Component{

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {

    return (
        <div>
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
        <a href="mailto:oliverberry84@gmail.com?Subject=Enquiry"><img className = 'links' src={require('./images/emailwhite2.png')} alt='email'/></a>

        <a href="https://www.linkedin.com/in/oliver-berry-748a8490/" rel="noopener noreferrer" target="_blank"><img className = 'links' src={require('./images/linkedinwhite.png')} alt='linkedIn'/></a>

        <a href="https://github.com/OliBerry84" rel="noopener noreferrer" target="_blank"><img className = 'links' src={require('./images/githubwhite.png')} alt='github'/></a>

        <a href="https://www.instagram.com/oli.berry/" rel="noopener noreferrer" target="_blank"><img className = 'links' src={require('./images/instawhite.png')} alt='instagram'/></a>
      </div>
      <button onClick={this.topFunction} className="topbutton" id="topbutton" title="Return to the top">Return to Top</button>
    </div>
  </footer>
        </div>
)
}
}

export default About;