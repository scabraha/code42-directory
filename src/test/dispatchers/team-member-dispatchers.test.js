import { getMembersByOrg, getDetailsByUserId, getReposByUserId } from '../../dispatchers/team-member-dispatchers';
import { MemberActionTypes } from '../../constants';
import * as GitHubWebAPIs from '../../web/github-web-apis';

describe('Team Member Dispatchers', () => {
  it('Calls getMembersByOrg and ensures the correct actions are dispatched', () => {
    spyOn(GitHubWebAPIs, 'getMembersByOrg');
    const dispatchSpy = jasmine.createSpy('dispatch');

    getMembersByOrg('test')(dispatchSpy);
    expect(dispatchSpy.calls.mostRecent().args).toEqual(
      [{ type: MemberActionTypes.GET_MEMBERS_BY_ORG, org: 'test' }],
    );

    expect(GitHubWebAPIs.getMembersByOrg).toHaveBeenCalled();

    const args = GitHubWebAPIs.getMembersByOrg.calls.mostRecent().args;
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

  it('Calls getDetailsByUserId and ensures the correct actions are dispatched', () => {
    spyOn(GitHubWebAPIs, 'getDetailsByUserId');
    const dispatchSpy = jasmine.createSpy('dispatch');

    getDetailsByUserId('test')(dispatchSpy);
    expect(dispatchSpy.calls.mostRecent().args).toEqual(
      [{ type: MemberActionTypes.GET_MEMBER_DETAILS_BY_ID, userId: 'test' }],
    );

    expect(GitHubWebAPIs.getDetailsByUserId).toHaveBeenCalled();

    const args = GitHubWebAPIs.getDetailsByUserId.calls.mostRecent().args;
    expect(args[0]).toBe('test');
    args[1]('testData');
    expect(dispatchSpy.calls.mostRecent().args).toEqual(
      [{ type: MemberActionTypes.GET_MEMBER_DETAILS_BY_ID_SUCCESS, details: 'testData' }],
    );

    args[2]('testData');
    expect(dispatchSpy.calls.mostRecent().args).toEqual(
      [{ type: MemberActionTypes.GET_MEMBER_DETAILS_BY_ID_FAILURE }],
    );
  });

  it('Calls getReposByUserId and ensures the correct actions are dispatched', () => {
    spyOn(GitHubWebAPIs, 'getReposByUserId');
    const dispatchSpy = jasmine.createSpy('dispatch');

    getReposByUserId('test')(dispatchSpy);
    expect(dispatchSpy.calls.mostRecent().args).toEqual(
      [{ type: MemberActionTypes.GET_REPOS_BY_ID, userId: 'test' }],
    );

    expect(GitHubWebAPIs.getReposByUserId).toHaveBeenCalled();

    const args = GitHubWebAPIs.getReposByUserId.calls.mostRecent().args;
    expect(args[0]).toBe('test');
    args[1]('testData');
    expect(dispatchSpy.calls.mostRecent().args).toEqual(
      [{ type: MemberActionTypes.GET_REPOS_BY_ID_SUCCESS, repos: 'testData' }],
    );

    args[2]('testData');
    expect(dispatchSpy.calls.mostRecent().args).toEqual(
      [{ type: MemberActionTypes.GET_REPOS_BY_ID_FAILURE }],
    );
  });
});
