import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  componentDidMount() {
    const header = document.querySelector('#header');
    const layer0 = document.querySelector('#layer-0');
    const layer1 = document.querySelector('#layer-1');
    const layer2 = document.querySelector('#layer-2');
    const layer3 = document.querySelector('#layer-3');
    const layer4 = document.querySelector('#layer-4');
    const layer5 = document.querySelector('#layer-5');
    const layer6 = document.querySelector('#layer-6');
    const layer7 = document.querySelector('#layer-7');

    layer0.addEventListener('load', () => {
      let layer0Height = layer0.offsetHeight; 
      let layer0Ratio = layer0Height / window.innerWidth;
      window.addEventListener('resize', () => {
        header.style.height = Math.round(layer0Ratio * window.innerWidth - window.scrollY) + 'px';
        header.style.maxHeight = layer0.offsetHeight + 'px';
        layer0Height = layer0.offsetHeight;
      }, false);
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 0) {
          if (layer0Height / 2 >= window.scrollY) {
            header.style.height = layer0Height - window.scrollY + 'px';
          } else {
            header.style.height = layer0Height / 2 + 'px';
          }
          layer1.style.top = window.scrollY * 0.4 + 'px';
          layer2.style.top = window.scrollY * 0.3 + 'px';
          layer3.style.top = -window.scrollY * 0 + 'px';
          layer4.style.top = -window.scrollY * 0.3 + 'px';
          layer5.style.top = -window.scrollY * 0.5 + 'px';
          layer6.style.top = -window.scrollY * 0.9 + 'px';
        }
      }, false);  
    }, false);
  }

  render() {
    return (
      <div>
        <div id="header">
          <div id="header-title" className="layer">
            <h1>
              <span className="name-first">B</span>RIAN <span className="name-first">K</span>IM
            </h1>
            <h2>
              <span className="description-first">W</span>EB <span className="description-first">D</span>EVELOPER
            </h2>
            <div id="arrow-container">
              <img id="arrow" src="images/arrow.png" />
            </div>
          </div>
          <img id="layer-0" className="layer" src="images/layer-0.jpg" alt="Background layer of header" />
          <img id="layer-1" className="layer" src="images/layer-1.png" alt="First layer of header" />
          <img id="layer-2" className="layer" src="images/layer-2.png" alt="Second layer of header" />
          <img id="layer-3" className="layer" src="images/layer-3.png" alt="Third layer of header" />
          <img id="layer-4" className="layer" src="images/layer-4.png" alt="Fourth layer of header" />
          <img id="layer-5" className="layer" src="images/layer-5.png" alt="Fifth layer of header" />
          <img id="layer-6" className="layer" src="images/layer-6.png" alt="Sixth layer of header" />
          <img id="layer-7" src="images/layer-7.png" alt="Seventh layer of header" />
        </div>
      </div>
    );     
  }
}

export default Header;