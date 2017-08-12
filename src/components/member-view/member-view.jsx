import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from '../loading-indicator/loading-indicator';
import { ServiceStatus } from '../../constants';
import './member-view.scss';

function renderLoadingIndicator(org) {

  return (
    <div className="member-view-load md-subheading-2 md-text-center">
      <div><LoadingIndicator /></div>
      Retrieving members for {org}
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
        break;
    
      case ServiceStatus.FAILURE:
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
