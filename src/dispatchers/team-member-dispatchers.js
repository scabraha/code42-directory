import { MemberActionTypes } from '../constants';
import * as GitHubWebAPIs from '../web/github-web-apis';

export const getMembersByOrg = org => (dispatch) => {
  dispatch({ type: MemberActionTypes.GET_MEMBERS_BY_ORG, org });
  return GitHubWebAPIs.getMembersByOrg(
    org,
    members => dispatch({ type: MemberActionTypes.GET_MEMBERS_BY_ORG_SUCCESS, members }),
    () => dispatch({ type: MemberActionTypes.GET_MEMBERS_BY_ORG_FAILURE }),
  );
};

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
