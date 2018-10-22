import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayEmail: false
    };

    this.toggleEmail = this.toggleEmail.bind(this);
  }

  toggleEmail() {
    this.setState({
      displayEmail: !this.state.displayEmail
    });
  }

  render() {
    return (
      <div id="footer">
        <h1 id="footer-title" className="section-title">
          <span className="title-decorator">&#x2014;&#x2014;</span> HIRE ME <span className="title-decorator">&#x2014;&#x2014;</span>
        </h1>
        <div id="profile-picture-container">
          <img id="profile-picture" src="images/profile-picture.png" alt="Profile Picture" />
        </div>
        <div id="footer-bar">
          {this.state.displayEmail && (
            <div id="email-box">
              <div id="email-close" onClick={this.toggleEmail}>x</div>
              <div id="email-title">Email</div>
              <div id="email">briandkim93[at]gmail.com</div>
            </div>
          )}
          <a className="footer-button" onClick={this.toggleEmail}>
            Contact
          </a>
          <a className="footer-button" href="https://github.com/briandkim93?tab=repositories" target="_blank">
            GitHub
          </a>
          <a className="footer-button" href="resume.pdf" target="_blank">
            Resume
          </a>
        </div>
        <p id="copyright">
          BRIAN KIM ©2018
        </p>
      </div>
    );     
  }
}

export default Footer;