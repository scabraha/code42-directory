import { MemberActionTypes } from '../constants';
import { getMembersForOrg, getDetailsForUserId } from '../web/github-web-apis';

export const getTeamMembersByOrg = org => (dispatch) => {
  dispatch({ type: MemberActionTypes.GET_MEMBERS_BY_ORG, org });
  return getMembersForOrg(
    org,
    members => dispatch({ type: MemberActionTypes.GET_MEMBERS_BY_ORG_SUCCESS, members }),
    () => dispatch({ type: MemberActionTypes.GET_MEMBERS_BY_ORG_FAILURE })
  );
};

export const getUserDetailsById = userId => (dispatch) => {
  dispatch({ type: MemberActionTypes.GET_MEMBER_DETAILS_BY_ID, userId });
  return getDetailsForUserId(
    userId,
    memberDetails => dispatch({
      type: MemberActionTypes.GET_MEMBER_DETAILS_BY_ID_SUCCESS,
      memberDetails
    }),
    () => dispatch({ type: MemberActionTypes.GET_MEMBER_DETAILS_BY_ID_FAILURE}),
  );
};
