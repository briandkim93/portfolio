import React, { Component } from 'react';

import './Project.css';

class Project extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="project">
            <div className="project-identifier">
              <span>- {this.props.id} -</span>
            </div>
            <h1 className="project-title">
              {this.props.title}
            </h1>        
            <h2 className="project-links">
              <a href={this.props.pageLink} target="_blank">Visit Page</a> | <a href={this.props.codeLink} target="_blank">Source Code</a>
            </h2>
            <div className="project-image-container">
              <img className="project-image" src={this.props.imageLink} alt={`${this.props.title} Preview`} />
            </div>
            <div className="project-info">          
              <p className="project-description">
                {this.props.description}
              </p>
              <p className="project-detail">
                <span>Built With:</span> {this.props.tools}
              </p>
            </div>
          </div>
        </div>
      </div>
    );     
  }
}

export default Project;