import React, {Component} from 'react';

class Projects extends Component{

    topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
      
  render() {
    return (
        <div>
        <div id='projects' className='projects'>Projects</div>
            <div className = 'projects-container'>
            <div className = 'rubyproject'>
                <input type='image' className = 'rubyimage' src={require('./images/giggity_records.png')} alt='rubyproject' name = 'submit'/>
                <p>A CodeClan Ruby project</p>
                <p>Designing a Record Store management console</p>
                <p><a href="https://github.com/OliBerry84/RubyProject" rel="noopener noreferrer" target="_blank"><img className = 'links' src={require('./images/githubwhite.png')} alt='github'/></a>
            </p>
            </div>

            <div className = 'javaproject'>
            <input type='image' className = 'javaimage' src={require('./images/android.png')} alt='androidimage'/>
            <p>A CodeClan Android/Java project</p>
            <p>Create a functioning To-Do list application for android devices</p>
            <p><a href="https://github.com/OliBerry84/androidToDoListProject" rel="noopener noreferrer" target="_blank"><img className = 'links' src={require('./images/githubwhite.png')} alt='github'/></a>
            </p>
        </div>

        <div className = 'javascriptproject'>
            <input type='image' className = 'javascriptimage' src={require('./images/love_letter.png')} alt='loveletterimage'/>
            <p>The CodeClan JavaScript group project</p>
            <p>Based on the card game "LoveLetter", designed and implemented a functional 4 player version of the game</p>
            <p><a href="https://github.com/OliBerry84/Love_Letter_JS_group_Project" rel="noopener noreferrer" target="_blank"><img className = 'links' src={require('./images/githubwhite.png')} alt='github'/></a>
        </p>
        </div>

        <div className = 'websiteproject'>
        <input type='image' className = 'websiteimage' src={require('./images/portfolio.png')} alt='websiteprojectimage'/>
        <p>My CodeClan individual project</p>
        <p>My individual project to create my own portfolio</p>
        <p><a href="https://github.com/OliBerry84/my_portfolio" rel="noopener noreferrer" target="_blank"><img className = 'links' src={require('./images/githubwhite.png')} alt='github'/></a>
        </p>
        </div>

        <div className = 'whereintheworld'>
        <a href="https://where-in-the-world.glitch.me/" rel="noopener noreferrer" target="_blank"> <img className = 'whereintheworldimage' src={require('./images/whereintheworld.png')} alt='whereintheworld'/></a>
        <p>Paired programming lab collaboration</p>
        <p>Using the Google Maps API and displaying data</p>
        <p>Click the image to link to the site</p>
        <p><a href="https://github.com/OliBerry84/Week12WedsLab" rel="noopener noreferrer" target="_blank"><img className = 'links' src={require('./images/githubwhite.png')} alt='github'/></a>
        </p>
        </div>
    </div>
    </div>
); // return
} // render
} // class

  export default Projects;