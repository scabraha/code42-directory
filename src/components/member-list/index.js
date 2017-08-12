import { connect } from 'react-redux';
import MemberList from './member-list';
import { getUserDetailsById } from '../../dispatchers/team-member-dispatchers';

const mapStateToProps = state => ({
  teamMembers: state.teamMembers,
  selectedMemberId: state.selectedMemberId,
});

const mapDispatchToProps = dispatch => ({
  onMemberSelect: userId => dispatch(getUserDetailsById(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);
