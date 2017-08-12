import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/header/header';
import MemberContainer from './components/member-view';
import ContentContainer from './components/content-view';

export default class App extends React.Component {
  constructor(props) {
    super();
    props.onLoad();
  }

  render() {
    return (
      <div>
        <Header />
        <MemberContainer />
        <main id="main" role="main">
          <ContentContainer />
        </main>
      </div>
    )
  }
}

App.propTypes = { onLoad: PropTypes.func.isRequired }; 
