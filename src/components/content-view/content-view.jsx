import React from 'react';
import PropTypes from 'prop-types';
import { ServiceStatus } from '../../constants';
import logo from '../../images/logo.svg';
import './content-view.scss';

const LOGO = <img src={logo} className="content-view-image" alt="avatar" />;

export default class ContentView extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let avatar;
    let title;
    switch(this.props.memberDetailsRequestStatus) {
      case ServiceStatus.SUCCESS:
        avatar = (
          <img 
            src={this.props.memberDetails.avatar_url} 
            className="content-view-image" 
            alt="avatar" 
          />
        )
        title = this.props.memberDetails.name;
        break;
      case ServiceStatus.NOT_STARTED:
        avatar = LOGO; 
        title = 'Welcome to the Code42 GitHub Directory';
        break;
      case ServiceStatus.LOADING:
        avatar = LOGO;
        title = `Loading ${this.props.selectedMemberId}'s details`;
        break;
    
    }

    return (
      <div className="content-view">
        <div className="content-view-header">{avatar}<h2 className="md-headline">{title}</h2></div>
        <p className="content-view-body">
          Select a member to learn more about them 
        </p>
      </div>
    )
  }
}

ContentView.propTypes = {
  memberDetailsRequestStatus: PropTypes.string.isRequired,
  selectedMemberId: PropTypes.string,
  memberDetails: PropTypes.shape({
    //TODO: Do this
  })
}; 
