import { connect } from 'react-redux';
import MemberView from './member-view';

const mapStateToProps = state => ({
  organization: state.team.organization,
  teamMemberRequestStatus: state.team.memberRequestStatus,
});

export default connect(mapStateToProps)(MemberView);
