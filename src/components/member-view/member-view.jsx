import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from '../loading-indicator/loading-indicator';
import FailureIndicator from '../failure-indicator/failure-indicator';
import MemberList from '../member-list';
import { ServiceStatus } from '../../constants';
import './member-view.scss';

function renderLoadingIndicator(org) {
  return (
    <div className="member-view-text md-subheading-2 md-text-center">
      <div><LoadingIndicator /></div>
      Retrieving members for {org}
    </div>
  )
}

// TODO: Figure out centering failure text
function renderFailureMessage(org) {
  return (
    <div className="member-view-text md-subheading-2 md-text-center">
      <div><FailureIndicator /></div>
      Failed to retrieve members for {org}
    </div>
  )
}

class MemberView extends React.Component {
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

export default MemberView;
