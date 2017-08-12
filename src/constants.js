import keymirror from 'keymirror';

/**
 * Service Status constants used to maintain web request status for API's
 */
export const ServiceStatus = keymirror({
  NOT_STARTED: null,
  LOADING: null,
  SUCCESS: null,
  FAILURE: null,
});

/**
 * The action types for retrieving team members, their details, and applicable repositories.
 */
export const MemberActionTypes = keymirror({
  GET_MEMBERS_BY_ORG: null,
  GET_MEMBERS_BY_ORG_SUCCESS: null,
  GET_MEMBERS_BY_ORG_FAILURE: null,
  GET_MEMBER_DETAILS_BY_ID: null,
  GET_MEMBER_DETAILS_BY_ID_SUCCESS: null,
  GET_MEMBER_DETAILS_BY_ID_FAILURE: null,
  GET_REPOS_BY_ID: null,
  GET_REPOS_BY_ID_SUCCESS: null,
  GET_REPOS_BY_ID_FAILURE: null,
});

