import keymirror from 'keymirror';

export const ServiceStatus = keymirror({
  NOT_STARTED: null,
  LOADING: null,
  SUCCESS: null,
  FAILURE: null,
});

export const MemberActionTypes = keymirror({
  GET_MEMBERS_BY_ORG: null,
  GET_MEMBERS_BY_ORG_SUCCESS: null,
  GET_MEMBERS_BY_ORG_FAILURE: null,
  GET_MEMBER_DETAILS_BY_ID: null,
  GET_MEMBER_DETAILS_BY_ID_SUCCESS: null,
  GET_MEMBER_DETAILS_BY_ID_FAILURE: null,
});

