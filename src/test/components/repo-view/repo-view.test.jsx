import React from 'react';
import renderer from 'react-test-renderer';
import RepoView from '../../../components/repo-view/repo-view';

describe('Repo View', () => {
  it('Renders the view without repo details and loading status and ensures it renders correctly', () => {
    const tree = renderer.create(
      <RepoView repoRequestStatus="LOADING"  repos={[]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the view without repo details and failure status and ensures it renders correctly', () => {
    const tree = renderer.create(
      <RepoView repoRequestStatus="FAILURE"  repos={[]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the view with repo details and ensures it renders correctly', () => {
    const tree = renderer.create(
      <RepoView 
        repoRequestStatus="SUCCESS"  
        repos={[
          {
            html_url: 'url1',
            name: 'repo1',
            language: 'language1',
            description: 'description1'
          },
          {
            html_url: 'url2',
            name: 'repo2',
            language: 'language2',
            description: 'description2'
          },
          {
            html_url: 'url3',
            name: 'repo3',
            language: 'language3',
            description: 'description3'
          },
        ]} 
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

