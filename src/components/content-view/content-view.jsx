import React from 'react';
import PropTypes from 'prop-types';
import MemberDetails from '../member-details/member-details';
import { ServiceStatus } from '../../constants';
import logo from '../../images/logo.svg';
import './content-view.scss';

const LOGO = <img src={logo} className="content-view-image" alt="avatar" />;

/**
 * Represents the content view in the application. Responsible for displaying the default landing
 * page as well as the selected member's details if available.
 * @prop {String} memberDetailsRequestStatus The request status of the member details.
 * @prop {String} [selectedMemberId] The currently selected member ID, used to display the loading
 * message if details are loading.
 * @prop {Object} [memberDetails] The details of the currently selected team member.
 */
export default class ContentView extends React.Component {
  render() {
    const memberDetails = this.props.memberDetails;

    let avatar;
    let title;
    let content;
    switch(this.props.memberDetailsRequestStatus) {
      case ServiceStatus.SUCCESS:
        avatar = (
          <img 
            src={memberDetails.avatar_url} 
            className="content-view-image" 
            alt="avatar" 
          />
        )
        title = memberDetails.name;
        content = (
          <MemberDetails
            location={memberDetails.location}
            email={memberDetails.email}
            joinDate={memberDetails.created_at}
          />
        );
        break;

      case ServiceStatus.LOADING:
        avatar = LOGO;
        title = `Loading ${this.props.selectedMemberId}'s details`;
        break;

      default:
        avatar = LOGO; 
        title = 'Welcome to the Code42 GitHub Directory';
        content = (
          <p className="content-view-body">
            Select a member to learn more about them 
          </p>
        );
        break;
    }

    return (
      <div className="content-view">
        <div className="content-view-header">{avatar}<h2 className="md-headline">{title}</h2></div>
        {content}
      </div>
    )
  }
}

ContentView.propTypes = {
  memberDetailsRequestStatus: PropTypes.string.isRequired,
  selectedMemberId: PropTypes.string,
  memberDetails: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    location: PropTypes.string,
    email: PropTypes.email,
  })
}; 
