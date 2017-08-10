import React from 'react';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import LoadingIndicator from './components/loading-indicator';
import { getMembersForOrg } from './web/github-web-apis.js';
import logo from './images/logo.svg';
import './app.scss';

function getLoadingIndicator() {
  return <div className="App-loading-indicator"><LoadingIndicator /></div>;
}

export default function() {
  return (
    <NavigationDrawer
      drawerTitle="Members"
      toolbarTitle="Code42 Directory"
      drawerChildren={getLoadingIndicator()}
    >
      <div className="App">
        <div className="App-header" onClick={() => getMembersForOrg('code42')}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Code42 GitHub Directory</h2>
        </div>
        <p className="App-intro">
          Select a Code42 member to learn more about them 
        </p>
      </div>
    </NavigationDrawer>
  )
}
