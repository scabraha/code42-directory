import { combineReducers } from 'redux';
import { ServiceStatus, MemberActionTypes } from '../constants';

function selectedId(state = '', action) {
  switch (action.type) {
    case MemberActionTypes.GET_MEMBER_DETAILS_BY_ID:
      return action.userId;
    default:
      return state;
  }
}

function details(state = {}, action) {
  switch (action.type) {
    case MemberActionTypes.GET_MEMBER_DETAILS_BY_ID_SUCCESS:
      return action.details;
    default:
      return state;
  }
}

function repos(state = [], action) {
  switch (action.type) {
    case MemberActionTypes.GET_REPOS_BY_ID_SUCCESS:
      return action.repos;
    default:
      return state;
  }
}

function detailsRequestStatus(state = ServiceStatus.NOT_STARTED, action) {
  switch (action.type) {
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

function repoRequestStatus(state = ServiceStatus.NOT_STARTED, action) {
  switch (action.type) {
    case MemberActionTypes.GET_REPOS_BY_ID:
      return ServiceStatus.LOADING;
    case MemberActionTypes.GET_REPOS_BY_ID_SUCCESS:
      return ServiceStatus.SUCCESS;
    case MemberActionTypes.GET_REPOS_BY_ID_FAILURE:
      return ServiceStatus.FAILURE;
    default:
      return state;
  }
}

export default combineReducers({
  selectedId,
  details,
  repos,
  detailsRequestStatus,
  repoRequestStatus,
});

