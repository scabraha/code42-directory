import { getTeamMembersByOrg } from '../../dispatchers/team-member-dispatchers';
import { MemberActionTypes } from '../../constants';
import * as GitHubWebAPis from '../../web/github-web-apis';

describe('Team Member Dispatchers', () => {
  it('Calls getTeamMembersByOrg and ensures the correct actions are dispatched', () => {
    spyOn(GitHubWebAPis, 'getMembersForOrg');
    const dispatchSpy = jasmine.createSpy('dispatch');

    getTeamMembersByOrg('test')(dispatchSpy);
    expect(dispatchSpy.calls.mostRecent().args).toEqual(
      [{ type: MemberActionTypes.GET_MEMBERS_BY_ORG, org: 'test' }],
    );

    expect(GitHubWebAPis.getMembersForOrg).toHaveBeenCalled();

    const args = GitHubWebAPis.getMembersForOrg.calls.mostRecent().args;
    expect(args[0]).toBe('test');
    args[1]('testData');
    expect(dispatchSpy.calls.mostRecent().args).toEqual(
      [{ type: MemberActionTypes.GET_MEMBERS_BY_ORG_SUCCESS, members: 'testData' }],
    );

    args[2]('testData');
    expect(dispatchSpy.calls.mostRecent().args).toEqual(
      [{ type: MemberActionTypes.GET_MEMBERS_BY_ORG_FAILURE }],
    );
  });
});
