import React, { Component } from 'react';

import './About.css';

class About extends Component {
  render() {
    return (
      <div id="about">
        <h1 id="about-title">
          <span className="title-decorator">&#x2014;&#x2014;</span> ABOUT <span className="title-decorator">&#x2014;&#x2014;</span>
        </h1>
        <p id="about-description">
          I am an aspiring full-stack web developer based in the Los Angeles County Area. 
          Previously, I was an AV/IT specialist for the Los Angeles Rams but decided to resign from my position in order to follow a passion of mine that had been growing over the past few years:
          Building scalable, user-friendly, and aesthetically exceptional web applications.
        </p>
      </div>
    );     
  }
}

export default About;