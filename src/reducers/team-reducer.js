import { combineReducers } from 'redux';
import { ServiceStatus, MemberActionTypes } from '../constants';

function organization(state = '', action) {
  switch (action.type) {
    case MemberActionTypes.GET_MEMBERS_BY_ORG:
      return action.org;
    default:
      return state;
  }
}

function members(state = [], action) {
  switch (action.type) {
    case MemberActionTypes.GET_MEMBERS_BY_ORG_SUCCESS:
      return action.members;
    default:
      return state;
  }
}

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
