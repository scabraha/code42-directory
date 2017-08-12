import React from 'react';
import { renderShallow } from '../../TestUtils';
import MemberListContainer from '../../../components/member-list';
import * as TeamMemberDispatchers from '../../../dispatchers/team-member-dispatchers';

describe('Member List Container', () => {
  it('renders the container and ensures props are mapped correctly', () => {
    const mockStore = { getState: () => ({
      team: { members: 'members' },
      member: { selectedId: 'selectedId' },
    }) };
    const actual = renderShallow(React.createElement(MemberListContainer, { store: mockStore }));

    expect(actual.props.teamMembers).toBe('members');
    expect(actual.props.selectedMemberId).toBe('selectedId');
  });

  it('renders the container and ensures dispatches are mapped correctly', () => {
    spyOn(TeamMemberDispatchers, 'getDetailsByUserId').and.returnValue('getDetailsByUserId');
    spyOn(TeamMemberDispatchers, 'getReposByUserId').and.returnValue('getReposByUserId');
    const dispatch = jasmine.createSpy('dispatch');

    const mockStore = {
      getState: () => ({
        team: { members: 'members' },
        member: { selectedId: 'selectedId' },
      }),
      dispatch,
    };
    const actual = renderShallow(React.createElement(MemberListContainer, { store: mockStore }));

    actual.props.onMemberSelect('testId');
    expect(TeamMemberDispatchers.getDetailsByUserId).toHaveBeenCalledWith('testId');
    expect(TeamMemberDispatchers.getReposByUserId).toHaveBeenCalledWith('testId');
  });
});
