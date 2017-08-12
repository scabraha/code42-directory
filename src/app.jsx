import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/header/header';
import MemberContainer from './components/member-view';
import logo from './images/logo.svg';
import './app.scss';

export default class App extends React.Component {
  constructor(props) {
    super();
    //props.onLoad();
  }

  render() {
    return (
      <div>
        <Header />
        <MemberContainer />
        <main id="main" role="main">
          <div className="app">
            <div className="app-header"> 
              <img src={logo} className="app-logo" alt="logo" />
              <h2 className="md-title">Welcome to the Code42 GitHub Directory</h2>
            </div>
            <p className="app-intro">
              Select a Code42 member to learn more about them 
            </p>
          </div>
        </main>
      </div>
    )
  }
}

App.propTypes = { onLoad: PropTypes.func.isRequired }; 
