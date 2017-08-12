import { connect } from 'react-redux';
import App from './app';
import { getMembersByOrg } from './dispatchers/team-member-dispatchers';

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(getMembersByOrg('Code42')),
});

export default connect(null, mapDispatchToProps)(App);

