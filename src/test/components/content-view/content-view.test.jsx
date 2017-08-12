import React from 'react';
import renderer from 'react-test-renderer';
import ContentView from '../../../components/content-view/content-view';

jest.mock('../../../components/member-details/member-details', () => 'MemberDetails');

describe('Content View', () => {
  it('Renders the view without member details and ensures logo and welcome message show', () => {
    const tree = renderer.create(
      <ContentView memberDetailsRequestStatus="NOT_STARTED" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the view while loading member details and ensures logo and loading message show', () => {
    const tree = renderer.create(
      <ContentView memberDetailsRequestStatus="LOADING" selectedMemberId="testId" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the view with member details and ensures details show', () => {
    const details = {
      avatar_url: 'testURL',
      name: 'testName',
      created_at: '6/05/2001',
      location: 'USA',
      email: 'test@test.com'
    }
    const tree = renderer.create(
      <ContentView 
        memberDetailsRequestStatus="SUCCESS" 
        selectedMemberId="testId" 
        memberDetails={details}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

