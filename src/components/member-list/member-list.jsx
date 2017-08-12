import React from 'react';
import PropTypes from 'prop-types';
import './member-list.scss';

/**
 * Represents a list of team members
 * @prop {Array} teamMembers The team members to display.
 * @prop {Function} onMemberSelect The callback to execute when a team member is selected.
 * @prop {String} selectedMemberId The currently selected team member. Used to highlight the
 * applicable list item.
 */
class MemberList extends React.Component {i
  constructor(props) {
    super(props);
    this.renderMemberListItem = this.renderMemberListItem.bind(this);
  }
  renderMemberListItem(member) {
    const listProps = {
      key: member.login,
      className: 'member-list-item noselect',
      onClick: () => this.props.onMemberSelect(member.login)
    }

    // Select this item if it's current displaying
    if (member.login === this.props.selectedMemberId) listProps['aria-selected'] = true;

    return (
      <li {...listProps}>
        <img alt="" src={member.avatar_url} />
        <div>{member.login}</div>
      </li>)
  }

  render() {
    return (
      <div className="member-view">
        <ul>{this.props.teamMembers.map(this.renderMemberListItem)}</ul>
      </div>
    )
  }
}

MemberList.propTypes = {
  teamMembers: PropTypes.arrayOf(PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired
  })).isRequired,
  onMemberSelect: PropTypes.func.isRequired,
  selectedMemberId: PropTypes.string
}

export default MemberList;

