import { connect } from 'react-redux';
import MemberList from './member-list';

const mapStateToProps = state => ({
  teamMembers: state.teamMembers,
  selectedMemberId: state.memberDetails,
});

const mapDispatchToProps = dispatch => ({
  onMemberSelect: memberId => console.log(`got ${memberId}`),
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);

