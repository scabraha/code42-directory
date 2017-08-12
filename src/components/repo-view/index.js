import { connect } from 'react-redux';
import RepoView from './repo-view';

const mapStateToProps = state => ({
  repoRequestStatus: state.member.repoRequestStatus,
  repos: state.member.repos,
});

export default connect(mapStateToProps)(RepoView);

