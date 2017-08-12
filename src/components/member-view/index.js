import { connect } from 'react-redux';
import MemberView from './member-view';

const mapStateToProps = state => ({
  organization: state.organization,
  teamMemberRequestStatus: state.teamMemberRequestStatus,
});

export default connect(mapStateToProps)(MemberView);
