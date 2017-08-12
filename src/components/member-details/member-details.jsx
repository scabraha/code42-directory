import React from 'react';
import PropTypes from 'prop-types';
import RepoView from '../repo-view';
import './member-details.scss';

/**
 * Represents the details of a team member.
 * @prop {String} joinDate The date the team member joined GitHub. Must be in ISO date format.
 * @prop {String} [location] The location that the team member resides.
 * @prop {Email} [email] The email of the team member.
 */
class MemberDetails extends React.Component {
  render() {
    let location;
    let email;
    if (this.props.location) {
      location = <div><i className="material-icons">&#xE0C8;</i>{this.props.location}</div>;
    }

    if (this.props.email) {
      email = <span><a href={`mailto://${this.props.email}`}>{this.props.email}</a></span>;
    }
    
    const dateJoined = new Date(this.props.joinDate);
    const dateJoinedDisplay = dateJoined.toString().split(' ').slice(0, 4).join(' ');

    return (
      <div className="member-details">
        <div className="member-details-info md-body-2">
          {email}
          <div>Joined: {dateJoinedDisplay}</div>
          {location}
        </div>
        <RepoView />
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
