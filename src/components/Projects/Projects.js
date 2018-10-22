import React, { Component } from 'react';

import './Projects.css';
import Project from '../Project/Project';

class Projects extends Component {
  render() {
    return (
      <div id="projects-container">
        <div id="projects-gradient" />
        <h1 id="projects-title" className="section-title">
          <span className="title-decorator">&#x2014;&#x2014;</span> PROJECTS <span className="title-decorator">&#x2014;&#x2014;</span>
        </h1>
        <div id="projects">
          <Project 
            id="1"
            title="QuotivationBoard"
            pageLink="https://quotivationboard.com/"
            codeLink="https://github.com/briandkim93/QuotivationBoard"
            imageLink="images/p-qb.png"
            description="Enjoy an artistic display of quotes from your personalized list of inspirational people. Quotes are refreshed daily along with your source of motivation."
            tools="HTML5, CSS3, Bootstrap CSS, JavaScript, React + (Router - Persist), Redux, Django, Django REST + (Auth - Knox - Social OAuth2), PostgreSQL, DigitalOcean"
          />
          <Project 
            id="2"
            title="1001 Movies Checklist"
            pageLink="https://1001movieschecklist.com/"
            codeLink="https://github.com/briandkim93/1001MoviesChecklist"
            imageLink="images/p-oaomc.png"
            description="Keep track of your interactive checklist for the 1001 Movies You Must See Before You Die. Based on the popular book by Steven Jay Schneider and Ian Haydn Smith."
            tools="HTML5, CSS3, Bootstrap CSS, JavaScript, React + (Router - Persist), Redux, Django, Django REST + (Auth - Knox - Social OAuth2), PostgreSQL, AWS"
          />
          <Project 
            id="3"
            title="NextEpCountdown"
            pageLink="http://nextepcountdown.briankim.tech/"
            codeLink="https://github.com/briandkim93/NextEpCountdown"
            imageLink="images/p-nec.png"
            description="View a coundtdown timer for the airing of the next episode of any television show."
            tools="HTML5, CSS3, Bootstrap CSS, JavaScript, React, TVMaze API, DigitalOcean"
          />
          <Project 
            id="4"
            title="ViralShorts"
            pageLink="https://viralshorts.briankim.tech/"
            codeLink="https://github.com/briandkim93/ViralShorts"
            imageLink="images/p-vs.png"
            description="Type in a search term and watch from a list of the top 50 most viewed YouTube videos that are also 4 minutes or less in duration."
            tools="HTML5, CSS3, Bootstrap CSS, JavaScript, React, YouTube Data API, DigitalOcean"
          />
          <Project 
            id="5"
            title="ch4rl33"
            pageLink="http://ch4rl33.com/"
            codeLink="https://github.com/briandkim93/ch4rl33"
            imageLink="images/p-c.png"
            description="Explore the artwork and musical collection of up-and-coming artist ch4rl33. Listen to and download all his works including his newest album, IATROGEN (2018)."
            tools="HTML5, CSS3, JavaScript, jQuery, JustHost"
          />
          <Project 
            id="6"
            title="HabitBuilder"
            pageLink="https://habitbuilder.briankim.tech/"
            codeLink="https://github.com/briandkim93/HabitBuilder"
            imageLink="images/p-hb.png"
            description="Record the completion of your daily goals. Use the momentum of each day's successes to build and solidify your desired habits."
            tools="HTML5, CSS3, Django, Jinja2, MySQL, DigitalOcean"
          />
        </div>
      </div>
    );     
  }
}

export default Projects;