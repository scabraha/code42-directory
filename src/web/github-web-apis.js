import $ from 'jquery';

/**
 * Retrieves team members by the provided organization.
 * @param {String} org The GitHub organization to retrieve members for.
 */
export function getMembersByOrg(org, onSuccess, onFailure) {
  $.ajax({
    url: `http://api.github.com/orgs/${org}/members`,
    cache: false,
    dataType: 'json'
  }).done(data => onSuccess(data)).fail(onFailure);
}

/**
 * Retrieves details for the provided user identifier.
 * @param {String} userId The unique identifier of the user to retrieve details for.
 */
export function getDetailsByUserId(userId, onSuccess, onFailure) {
  $.ajax({
    url: `http://api.github.com/users/${userId}`,
    cache: false,
    dataType: 'json'
  }).done(data => onSuccess(data)).fail(onFailure);
}

/**
 * Retrieves repositories for the provided user identifier.
 * @param {String} userId The unique identifier of the user to retrieve repositories for.
 */
export function getReposByUserId(userId, onSuccess, onFailure) {
  $.ajax({
    url: `http://api.github.com/users/${userId}/repos`,
    cache: false,
    dataType: 'json'
  }).done(data => onSuccess(data)).fail(onFailure);
}
