import { combineReducers } from 'redux';
import { ServiceStatus, MemberActionTypes } from '../constants';

/**
 * The currently selected user identifier
 * State Type: String
 *
 * Manipulations:
 * - When member details are requested, set to the requested ID.
 */
function selectedId(state = '', action) {
  switch (action.type) {
    case MemberActionTypes.GET_MEMBER_DETAILS_BY_ID:
      return action.userId;
    default:
      return state;
  }
}

/**
 * The currently displaying user details
 * State Type: Object
 *
 * Manipulations:
 * - When member details are successfully retrieved, set to the retrieved details.
 */
function details(state = {}, action) {
  switch (action.type) {
    case MemberActionTypes.GET_MEMBER_DETAILS_BY_ID_SUCCESS:
      return action.details;
    default:
      return state;
  }
}

/**
 * The repos for the currently selected user
 * State Type: Array
 *
 * Manipulations:
 * - When a user's repositories details are retrieved, set to the retrieved repositories.
 */
function repos(state = [], action) {
  switch (action.type) {
    case MemberActionTypes.GET_REPOS_BY_ID_SUCCESS:
      return action.repos;
    default:
      return state;
  }
}

/**
 * The request status for a user's details
 * State Type: String
 *
 * Manipulations:
 * - When user details are requested, set to LOADING.
 * - When user details are retrieved, set to SUCCESS.
 * - When user details fail to be retrieved, set to FAILURE.
 */
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

/**
 * The request status for a user's repositories 
 * State Type: String
 *
 * Manipulations:
 * - When user repositories are requested, set to LOADING.
 * - When user repositories are retrieved, set to SUCCESS.
 * - When user repositories fail to be retrieved, set to FAILURE.
 */
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

