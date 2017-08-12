import React from 'react';
import renderer from 'react-test-renderer';
import MemberList from '../../../components/member-list/member-list';

describe('Member List', () => {
  it('Renders the view with no team members and ensures it renders correctly', () => {
    const tree = renderer.create(
      <MemberList
        teamMembers={[]}
        onMemberSelect={() => {}}
        selectedMemberId=''
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the view with team members and no selection and ensures it renders correctly', () => {
    const tree = renderer.create(
      <MemberList
        teamMembers={[
          { login: 'test1', avatar_url: 'url1' },
          { login: 'test2', avatar_url: 'url2' },
          { login: 'test3', avatar_url: 'url3' }
        ]}
        onMemberSelect={() => {}}
        selectedMemberId=''
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the view with team members and a selection and ensures it renders correctly', () => {
    const tree = renderer.create(
      <MemberList
        teamMembers={[
          { login: 'test1', avatar_url: 'url1' },
          { login: 'test2', avatar_url: 'url2' },
          { login: 'test3', avatar_url: 'url3' }
        ]}
        onMemberSelect={() => {}}
        selectedMemberId='test2'
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

