import React, { Component } from 'react';

import './App.css';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';

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
  }

  render() {
    return (
      <div className="app">
        <div className={`loader-container ${this.state.loaded ? 'loader-hidden' : ''}`}>
          <div className="loader" id="loader-a" />
          <div className="loader" id="loader-b" />
        </div>
        <Header />
        <Portfolio />
      </div>
    );
  }
}

export default App;