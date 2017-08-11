import React from 'react';
import logo from './images/logo.svg';
import './app.scss';

export default function() {
  return (
    <div className="App">
      <div className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to the Code42 GitHub Directory</h2>
      </div>
      <p className="App-intro">
        Select a Code42 member to learn more about them 
      </p>
    </div>
  )
}
