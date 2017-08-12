import { connect } from 'react-redux';
import App from './app';
import { getTeamMembersByOrg } from './dispatchers/team-member-dispatchers';

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(getTeamMembersByOrg('Code42')),
});

export default connect(null, mapDispatchToProps)(App);

