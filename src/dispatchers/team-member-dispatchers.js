import { MemberActionTypes } from '../constants';
import * as GitHubWebAPIs from '../web/github-web-apis';

/**
 * Dispatches an action to retrieve team members by the provided organization.
 * @param {String} org The GitHub organization to retrieve members for.
 */
export const getMembersByOrg = org => (dispatch) => {
  dispatch({ type: MemberActionTypes.GET_MEMBERS_BY_ORG, org });
  return GitHubWebAPIs.getMembersByOrg(
    org,
    members => dispatch({ type: MemberActionTypes.GET_MEMBERS_BY_ORG_SUCCESS, members }),
    () => dispatch({ type: MemberActionTypes.GET_MEMBERS_BY_ORG_FAILURE }),
  );
};

/**
 * Dispatches an action to retrieve details for the provided user identifier.
 * @param {String} userId The unique identifier of the user to retrieve details for.
 */
export const getDetailsByUserId = userId => (dispatch) => {
  dispatch({ type: MemberActionTypes.GET_MEMBER_DETAILS_BY_ID, userId });
  return GitHubWebAPIs.getDetailsByUserId(
    userId,
    details => dispatch({
      type: MemberActionTypes.GET_MEMBER_DETAILS_BY_ID_SUCCESS,
      details,
    }),
    () => dispatch({ type: MemberActionTypes.GET_MEMBER_DETAILS_BY_ID_FAILURE }),
  );
};

/**
 * Dispatches an action to retrieve repositories for the provided user identifier.
 * @param {String} userId The unique identifier of the user to retrieve repositories for.
 */
export const getReposByUserId = userId => (dispatch) => {
  dispatch({ type: MemberActionTypes.GET_REPOS_BY_ID, userId });
  return GitHubWebAPIs.getReposByUserId(
    userId,
    repos => dispatch({
      type: MemberActionTypes.GET_REPOS_BY_ID_SUCCESS,
      repos,
    }),
    () => dispatch({ type: MemberActionTypes.GET_REPOS_BY_ID_FAILURE }),
  );
};
