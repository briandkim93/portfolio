import React, { Component } from 'react';

import './Portfolio.css';
import About from '../About/About';
import Projects from '../Projects/Projects';

class Header extends Component {
  render() {
    return (
      <div id="portfolio">
        <About />
        <Projects />
      </div>
    );     
  }
}

export default Header;