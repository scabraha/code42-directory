import React from 'react';
import renderer from 'react-test-renderer';
import MemberDetails from '../../../components/member-details/member-details';
import RepoView from '../../../components/repo-view';

jest.mock('../../../components/repo-view', () => 'RepoView');

describe('Member Details', () => {
  it('Renders the view with all props and ensures they show', () => {
    const tree = renderer.create(
      <MemberDetails
        joinDate='Today'
        location='USA'
        email='test@domain.com'
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the view with no email and ensures it renders correctly', () => {
    const tree = renderer.create(
      <MemberDetails
        joinDate='Today'
        location='USA'
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the view with no location and ensures it renders correctly', () => {
    const tree = renderer.create(
      <MemberDetails
        joinDate='Today'
        email='test@domain.com'
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the view with no location or email and ensures it renders correctly', () => {
    const tree = renderer.create(<MemberDetails joinDate='Today' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

