import { MemberActionTypes } from '../constants';
import { getMembersForOrg } from '../web/github-web-apis';

export const getTeamMembersByOrg = org => (dispatch) => {
  dispatch({ type: MemberActionTypes.GET_MEMBERS_BY_ORG, org });
  return getMembersForOrg(
    org,
    data => dispatch({
      type: MemberActionTypes.GET_MEMBERS_BY_ORG_SUCCESS,
      members: data
    }),
    () => dispatch({ type: MemberActionTypes.GET_MEMBERS_BY_ORG_FAILURE })
  );
} 
