import { connect } from 'react-redux';
import ContentView from './content-view';

const mapStateToProps = state => ({
  selectedMemberId: state.member.selectedId,
  memberDetails: state.member.details,
  memberDetailsRequestStatus: state.member.detailsRequestStatus,
});

export default connect(mapStateToProps)(ContentView);
