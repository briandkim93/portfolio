import React, { Component } from 'react';

import './App.css';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.setState({
          loaded: true
        });
        window.scrollTo(0, 0);
      }, 1000);
    }, false);
    const about = document.querySelector('#about');
    const layer8 = document.querySelector('#layer-8');
    layer8.addEventListener('load', () => {
      window.addEventListener('resize', () => {
        if (about.getBoundingClientRect().bottom <= 0) {
          layer8.style.display = 'none';
        } else {
          layer8.style.display = 'block';
        }
      }, false);  
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 0) {
          layer8.style.top = window.scrollY * 1.2 + 'px';
          if (about.getBoundingClientRect().bottom <= 0) {
            layer8.style.display = 'none';
          } else {
            layer8.style.display = 'block';
          }
        }
      }, false);  
    }, false);
  }

  render() {
    return (
      <div className="app">
        <div className={`loader-container ${this.state.loaded ? 'loader-hidden' : ''}`}>
          <div className="loader" id="loader-a" />
          <div className="loader" id="loader-b" />
        </div>
        <Header />
        <img id="layer-8" className="layer" src="images/layer-8.png" alt="First layer of about" />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;