import React from 'react';
import PropTypes from 'prop-types';
import './member-details.scss';

class MemberDetails extends React.Component {i
  render() {
    return (
      <div className="member-details">
        <div className="member-details-info md-body-2">
          <div>Since: {this.props.joinDate}</div>
          <div><i className="material-icons">&#xE0C8;</i>{this.props.location}</div>
          <div><i className="material-icons">&#xE0BE;</i>{this.props.email}</div>
        </div>
        <div>repos here</div>
      </div>
    )
  }
}

MemberDetails.propTypes = {
  joinDate: PropTypes.string.isRequired,
  location: PropTypes.string,
  email: PropTypes.email,
}

export default MemberDetails;
