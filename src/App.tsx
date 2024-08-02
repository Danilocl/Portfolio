import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import profileImage from './assets/images/profile.jpg';

function App() {
  return (
    <div className="App">
      <div className="about">
        <div className="left">
          <h3>Full Stack Developer</h3>
          <h1>Danilo Cardoso</h1>
          <h4>I'm a full stack engineer looking for opportunities abroad.</h4>
          <div className="icons">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <FontAwesomeIcon className='icon' icon={faGithub} />
            <button className="resume">
              Download Resume <i className="far fa-copy"></i>
            </button>
            <button className="email">
              Copy Email <i className="far fa-copy"></i>
            </button>
          </div>
        </div>
        <div className="right">
          <a className="online"><i className="fas fa-circle"></i> Available For Job</a>
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default App;
