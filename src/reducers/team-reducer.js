import { combineReducers } from 'redux';
import { ServiceStatus, MemberActionTypes } from '../constants';

/**
 * The organization for which members are requested.
 * State Type: String
 *
 * Manipulations:
 * - When members for an organization are requested, set to the requested organization.
 */
function organization(state = '', action) {
  switch (action.type) {
    case MemberActionTypes.GET_MEMBERS_BY_ORG:
      return action.org;
    default:
      return state;
  }
}

/**
 * The team members for the organization
 * State Type: Array
 *
 * Manipulations:
 * - When members for an organization are retrieved, set to the retrieved members.
 */
function members(state = [], action) {
  switch (action.type) {
    case MemberActionTypes.GET_MEMBERS_BY_ORG_SUCCESS:
      return action.members;
    default:
      return state;
  }
}

/**
 * The request status for team members.
 * State Type: String
 *
 * Manipulations:
 * - When team members are requested, set to LOADING.
 * - When team members are retrieved, set to SUCCESS.
 * - When team members fail to be retrieved, set to FAILURE.
 */
function memberRequestStatus(state = ServiceStatus.NOT_STARTED, action) {
  switch (action.type) {
    case MemberActionTypes.GET_MEMBERS_BY_ORG:
      return ServiceStatus.LOADING;
    case MemberActionTypes.GET_MEMBERS_BY_ORG_SUCCESS:
      return ServiceStatus.SUCCESS;
    case MemberActionTypes.GET_MEMBERS_BY_ORG_FAILURE:
      return ServiceStatus.FAILURE;
    default:
      return state;
  }
}

export default combineReducers({
  organization,
  members,
  memberRequestStatus,
});
