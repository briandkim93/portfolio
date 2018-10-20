import React, { Component } from 'react';

import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div id="projects-container">
        <div id="projects-gradient" />
        <h1 id="projects-title">
          <span className="title-decorator">&#x2014;&#x2014;</span> PROJECTS <span className="title-decorator">&#x2014;&#x2014;</span>
        </h1>
        <div id="projects">
          <div className="project-seperator">
            <span>1</span>
          </div>
          <div className="project">
            <h1 className="project-title">
              QuotivationBoard
            </h1>        
            <h2 className="project-links">
              <a href="https://quotivationboard.com/" target="_blank">Visit Page</a> | <a href="https://github.com/briandkim93/QuotivationBoard" target="_blank">Source Code</a>
            </h2>
            <div className="project-image-container">
              <img className="project-image" src="images/p-qb.png" alt="QuotivationBoard Preview" />
            </div>
            <div className="project-info">          
              <p className="project-description">
                Enjoy an artistic display of quotes from your personalized list of inspirational people. 
                Quotes are refreshed daily along with your source of motivation.
              </p>
              <p className="project-detail">
                <span>Built With:</span> HTML5, CSS3, Bootstrap CSS, JavaScript, React + (Router - Persist), Redux, Django, Django REST + (Auth - Knox - Social OAuth2), PostgreSQL, DigitalOcean
              </p>
            </div>
          </div>
          <div className="project-seperator">
            <span>2</span>
          </div>
          <div className="project">
            <h1 className="project-title">
              1001 Movies Checklist
            </h1>
            <h2 className="project-links">
              <a href="https://1001movieschecklist.com/" target="_blank">Visit Page</a> | <a href="https://github.com/briandkim93/1001MoviesChecklist" target="_blank">Source Code</a>
            </h2>            
            <div className="project-image-container">
              <img className="project-image" src="images/p-oaomc.png" alt="1001 Movies Checklist Preview" />
            </div>
            <div className="project-info">          
              <p className="project-description">
                Keep track of your interactive checklist for the 1001 Movies You Must See Before You Die. 
                Based on the popular book by Steven Jay Schneider and Ian Haydn Smith.
              </p>
              <p className="project-detail">
                <span>Built With:</span> HTML5, CSS3, Bootstrap CSS, JavaScript, React + (Router - Persist), Redux, Django, Django REST + (Auth - Knox - Social OAuth2), PostgreSQL, AWS
              </p>
            </div>
          </div>
          <div className="project-seperator">
            <span>3</span>
          </div>
          <div className="project">
            <h1 className="project-title">
              NextEpCountdown
            </h1>
            <h2 className="project-links">
              <a href="http://nextepcountdown.briankim.tech/" target="_blank">Visit Page</a> | <a href="https://github.com/briandkim93/NextEpCountdown" target="_blank">Source Code</a>
            </h2>            
            <div className="project-image-container">
              <img className="project-image" src="images/p-nec.png" alt="NextEpCountdown Preview" />
            </div>
            <div className="project-info">          
              <p className="project-description">
                View a coundtdown timer until the airing of the next episode of any television show.
              </p>
              <p className="project-detail">
                <span>Built With:</span> HTML5, CSS3, Bootstrap CSS, JavaScript, React, TVMaze API, DigitalOcean
              </p>
            </div>
          </div>
          <div className="project-seperator">
            <span>4</span>
          </div>
          <div className="project">
            <h1 className="project-title">
              ViralShorts
            </h1>
            <h2 className="project-links">
              <a href="https://viralshorts.briankim.tech/" target="_blank">Visit Page</a> | <a href="https://github.com/briandkim93/ViralShorts" target="_blank">Source Code</a>
            </h2>            
            <div className="project-image-container">
              <img className="project-image" src="images/p-vs.png" alt="ViralShorts Preview" />
            </div>
            <div className="project-info">          
              <p className="project-description">
                Type in a search term and watch from a list of the top 50 most viewed YouTube videos that are also 4 minutes or less in duration.
              </p>
              <p className="project-detail">
                <span>Built With:</span> HTML5, CSS3, Bootstrap CSS, JavaScript, React, YouTube Data API, DigitalOcean
              </p>
            </div>
          </div>
          <div className="project-seperator">
            <span>5</span>
          </div>
          <div className="project">
            <h1 className="project-title">
              ch4rl33
            </h1>
            <h2 className="project-links">
              <a href="http://ch4rl33.com/" target="_blank">Visit Page</a> | <a href="https://github.com/briandkim93/ch4rl33" target="_blank">Source Code</a>
            </h2>            
            <div className="project-image-container">
              <img className="project-image" src="images/p-c.png" alt="ch4rl33 Preview" />
            </div>
            <div className="project-info">          
              <p className="project-description">
                Explore the artwork and musical collection of up-and-coming artist ch4rl33.
                Listen to and download all his works including his newest album, IATROGEN (2018).
              </p>
              <p className="project-detail">
                <span>Built With:</span> HTML5, CSS3, JavaScript, jQuery, JustHost
              </p>
            </div>
          </div>
          <div className="project-seperator">
            <span>6</span>
          </div>
          <div className="project">
            <h1 className="project-title">
              HabitBuilder
            </h1>
            <h2 className="project-links">
              <a href="https://habitbuilder.briankim.tech/" target="_blank">Visit Page</a> | <a href="https://github.com/briandkim93/HabitBuilder" target="_blank">Source Code</a>
            </h2>            
            <div className="project-image-container">
              <img className="project-image" src="images/p-hb.png" alt="HabitBuilder Preview" />
            </div>
            <div className="project-info">          
              <p className="project-description">
                Record the completion of your daily goals.
                Use the momentum of each day's successes to build and solidify your desired habits.
              </p>
              <p className="project-detail">
                <span>Built With:</span> HTML5, CSS3, Django, Jinja2, MySQL, DigitalOcean
              </p>
            </div>
          </div>
        </div>
      </div>
    );     
  }
}

export default Projects;