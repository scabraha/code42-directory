import React from 'react';
import './header.scss';

/**
 * Represents the main header for the application.
 */
export default class Header extends React.Component {
  render() {
    return (
      <header className="header" role="banner">
        <h1 className="md-display-1">Code42 Directory</h1>
      </header>
    );
  }
}

