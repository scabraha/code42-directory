import { connect } from 'react-redux';
import ContentView from './content-view';

const mapStateToProps = state => ({
  selectedMemberId: state.selectedMemberId,
  memberDetails: state.memberDetails,
  memberDetailsRequestStatus: state.memberDetailsRequestStatus
});

export default connect(mapStateToProps)(ContentView);
