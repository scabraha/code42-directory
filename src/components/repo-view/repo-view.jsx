import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from '../loading-indicator/loading-indicator';
import { ServiceStatus } from '../../constants';
import './repo-view.scss';

function renderRepoItem(repo) {
  return (
    <li className="repo-list-item">
      <div className="md-title"><a href={repo.html_url}>{repo.name}</a></div>
      {repo.description ? <div className="md-body-2">{repo.description}</div> : null}
      <div className="md-body-1">{repo.language}</div>
    </li>
  )

}

/**
 * Represents a list repositories with applicable status messages depending on the request status.
 * @prop {String} repoRequestStatus The current status of the repo request.
 * @prop {Array} repos The array of repositories to show. May be empty if none are available.
 */
export default class RepoView extends React.Component {
  render() {
    if (this.props.repoRequestStatus === ServiceStatus.LOADING) {
      return <LoadingIndicator />
    } else if (this.props.repoRequestStatus === ServiceStatus.FAILURE) {
      return <div className="md-body-2">Failed to retrieve repositories</div>
    }

    return <ul className="repo-list">{this.props.repos.map(renderRepoItem)}</ul>;
  }
}

RepoView.propTypes = {
  repoRequestStatus: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({
    html_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    description: PropTypes.string,
  })).isRequired
}

