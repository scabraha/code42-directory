import { combineReducers } from 'redux';
import { ServiceStatus, MemberActionTypes } from '../Constants';

function organization(state = '', action) {
  switch(action.type) {
    case MemberActionTypes.GET_MEMBERS_BY_ORG:
      return action.org;
    default:
      return state;
  }
}

function teamMembers(state = [], action) {
  switch(action.type) {
    case MemberActionTypes.GET_MEMBERS_BY_ORG_SUCCESS:
      return action.members;
    default:
      return state;
  }
}

function teamMemberRequestStatus(state = ServiceStatus.NOT_STARTED, action) {
  switch(action.type) {
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

function memberDetails(state = {}, action) {
  switch(action.type) {
    case MemberActionTypes.GET_MEMBER_DETAILS_BY_ID_SUCCESS:
      return action.memberDetails;
    default:
      return state;
  }
}

function memberDetailsRequestStatus(state = ServiceStatus.NOT_STARTED, action) {
  switch(action.type) {
    case MemberActionTypes.GET_MEMBER_DETAILS_BY_ID:
      return ServiceStatus.LOADING;
    case MemberActionTypes.GET_MEMBER_DETAILS_BY_ID_SUCCESS:
      return ServiceStatus.SUCCESS;
    case MemberActionTypes.GET_MEMBER_DETAILS_BY_ID_FAILURE:
      return ServiceStatus.FAILURE;
    default:
      return state;
  }
}

export default combineReducers({
  organization,
  teamMembers,
  teamMemberRequestStatus,
  memberDetails,
  memberDetailsRequestStatus
});
