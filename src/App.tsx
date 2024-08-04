import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faJs } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import profileImage from './assets/images/profile.jpg';
import weatherGif from './assets/images/weather-app.gif';
import currency from './assets/images/currencyGif.gif';

function App() {
  const [email, setEmail] = useState('Copy Email');
  const copyEmail = () => {
    const email = "davdanielbr@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setEmail("Copied!")
      setTimeout(() => {
        setEmail("Copy Email")
      }, 2000)
    }).catch((err) => {
      console.error("Not Copied!")
    })
  }

  return (
    <div className="App">
      <div className="about">
        <div className="left">
          <h3>Full Stack Developer</h3>
          <h1>Danilo Cardoso</h1>
          <h4>I'm a full stack engineer looking for opportunities abroad.</h4>
          <div className="icons">
            <a href='https://www.linkedin.com/in/devdanielcardoso/'
              target="_blank" rel="noopener noreferrer" className="icon-link">
              <FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
            <a href='https://github.com/Danilocl'
              target="_blank" rel="noopener noreferrer" className="icon-link">
              <FontAwesomeIcon className='icon' icon={faGithub} /></a>
            <a href='/resume.pdf' download className="resume">
              Download Resume <FontAwesomeIcon className='icon' icon={faDownload} />
            </a>
            <button className="email" onClick={copyEmail}>
              {email} <i className="far fa-copy"></i>
            </button>
          </div>
        </div>
        <div className="right">
          <a className="online"><i className="fas fa-circle"></i> Available For Job</a>
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
      <div className="works">
        <div className="item">
          <img src={weatherGif} alt='weather' />
          <div className="details">
            <a href='https://abouttheweather.netlify.app/' target="_blank" rel="noopener noreferrer"
              className='icon-link'><h3>Weather Forecast</h3></a>
            <div className="item-info">
              <div className="year-badge">2024</div>
              <h4>JavaScript</h4>
              <a href='https://github.com/Danilocl/Javascript-Projects/tree/master/weather-app'
                target="_blank" rel="noopener noreferrer" className="icon-link">
                <FontAwesomeIcon className='icon' icon={faGithub} /></a>
            </div>
            <p className="description">
              The app uses the OpenWeatherMap to search for the weather forecast for any city,
              <br></br>
              providing detailed information such as temperature, humidity, and weather conditions with the range of 24h.
            </p>
          </div>
        </div>

        <div className="item">
          <img src={currency} alt='weather' />
          <div className="details">
            <h3>Currency Converter</h3>
            <div className="item-info">
              <div className="year-badge">2024</div>
              <h4>React</h4>
              <a href='https://github.com/Danilocl/Javascript-Projects/tree/master/currency-converter'
                target="_blank" rel="noopener noreferrer" className="icon-link">
                <FontAwesomeIcon className='icon' icon={faGithub} /></a>
            </div>
            <p className="description">
              Simple currency converter made in react.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
