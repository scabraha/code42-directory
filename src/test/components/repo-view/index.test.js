import React from 'react';
import { renderShallow } from '../../TestUtils';
import RepoContainer from '../../../components/repo-view';

describe('Repo Container', () => {
  it('renders the container and ensures props are mapped correctly', () => {
    const mockStore = { getState: () => ({
      member: {
        repoRequestStatus: 'repoRequestStatus',
        repos: 'repos',
      },
    }) };
    const actual = renderShallow(React.createElement(RepoContainer, { store: mockStore }));

    expect(actual.props.repoRequestStatus).toBe('repoRequestStatus');
    expect(actual.props.repos).toBe('repos');
  });
});
