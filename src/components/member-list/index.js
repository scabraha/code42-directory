import { connect } from 'react-redux';
import MemberList from './member-list';
import { getDetailsByUserId, getReposByUserId } from '../../dispatchers/team-member-dispatchers';

const mapStateToProps = state => ({
  teamMembers: state.team.members,
  selectedMemberId: state.member.selectedId,
});

const mapDispatchToProps = dispatch => ({
  onMemberSelect: (userId) => {
    dispatch(getDetailsByUserId(userId));
    dispatch(getReposByUserId(userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);
