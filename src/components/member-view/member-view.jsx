import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from '../loading-indicator/loading-indicator';
import FailureIndicator from '../failure-indicator/failure-indicator';
import MemberList from '../member-list';
import { ServiceStatus } from '../../constants';
import './member-view.scss';

/**
 * Renders a loading indicator with a loading message
 * @param {String} org The org that members are being retrieved for.
 */
function renderLoadingIndicator(org) {
  return (
    <div className="member-view-text md-subheading-2 md-text-center">
      <div><LoadingIndicator /></div>
      Retrieving members for {org}
    </div>
  )
}

/**
 * Renders a failure indicator
 */
function renderFailureMessage() {
  return (
    <div className="member-view-text md-subheading-2 md-text-center">
      <div><FailureIndicator /></div>
      Member retrieval failure
    </div>
  )
}

/**
 * Represents the team members view. Resposible for showing applicable status messages based on the
 * retrieval status and showing the MemberList when members are retrieved.
 * @param {String} organization The organization members are being retrieved for.
 * @param {String} teamMemberRequestStatus The current request status for team members. Used to show
 * the appropriate status message.
 */
export default class MemberView extends React.Component {
  render() {
    let content;
    switch(this.props.teamMemberRequestStatus) {
      case ServiceStatus.LOADING:
        content = renderLoadingIndicator(this.props.organization); 
        break;
    
      case ServiceStatus.SUCCESS:
        content = <MemberList />
        break;
    
      case ServiceStatus.FAILURE:
        content = renderFailureMessage(this.props.organization);
        break;
    
      default:
        content = null;
    }

    return (
      <div className="member-view">
        {content}
      </div>
    )
  }
}

MemberView.propTypes = {
  organization: PropTypes.string.isRequired,
  teamMemberRequestStatus: PropTypes.string.isRequired
}

