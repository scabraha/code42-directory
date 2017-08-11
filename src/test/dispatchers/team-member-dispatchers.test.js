import { getTeamMembersByOrg } from '../../dispatchers/team-member-dispatchers';
import { MemberActionTypes } from '../../constants';
import * as GitHubWebAPis from '../../web/github-web-apis';

describe('Team Member Dispatchers', () => {
  it('Calls getTeamMembersByOrg and ensures the correct actions are dispatched', () => {
    spyOn(GitHubWebAPis, 'getMembersForOrg');
    const dispatchSpy = jasmine.createSpy('dispatch');

    getTeamMembersByOrg('test')(dispatchSpy);

    expect(GitHubWebAPis.getMembersForOrg).toHaveBeenCalled();
    
    const args = GitHubWebAPis.getMembersForOrg.calls.mostRecent().args;
    expect(args[0]).toBe('test');
    args[1]('testData');
    args[2]('testData');
    expect(dispatchSpy).toHaveBeenCalledWith(
      [{ type: MemberActionTypes.GET_MEMBERS_BY_ORG, org: 'test' }],
      [{ type: MemberActionTypes.GET_MEMBER_DETAILS_BY_ID_SUCCESS, members: 'testData' }],
      [{ type: MemberActionTypes.GET_MEMBER_DETAILS_BY_ID_FAILURE }]
    )
  });
});
