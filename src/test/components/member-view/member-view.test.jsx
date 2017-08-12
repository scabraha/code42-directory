import React from 'react';
import renderer from 'react-test-renderer';
import MemberView from '../../../components/member-view/member-view';

jest.mock('../../../components/member-list', () => 'MemberList');

describe('Member View', () => {
  it('Renders the view with an organization and loading status and ensures it renders correctly', () => {
    const tree = renderer.create(
      <MemberView organization="testOrgnization" teamMemberRequestStatus="LOADING" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the view with an organization and success status and ensures it renders correctly', () => {
    const tree = renderer.create(
      <MemberView organization="testOrgnization" teamMemberRequestStatus="SUCCESS" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the view with an organization and failure status and ensures it renders correctly', () => {
    const tree = renderer.create(
      <MemberView organization="testOrgnization" teamMemberRequestStatus="FAILURE" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the view with an organization and not started status and ensures it renders correctly', () => {
    const tree = renderer.create(
      <MemberView organization="testOrgnization" teamMemberRequestStatus="NOT_STARTED" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

