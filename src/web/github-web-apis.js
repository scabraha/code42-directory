import $ from 'jquery';

export function getMembersByOrg(org, onSuccess, onFailure) {
  $.getJSON(`http://api.github.com/orgs/${org}/members`)
    .done(data => onSuccess(data))
    .fail(onFailure);
}

export function getDetailsByUserId(userId, onSuccess, onFailure) {
  $.getJSON(`http://api.github.com/users/${userId}`)
    .done(data => onSuccess(data))
    .fail(onFailure);
}

export function getReposByUserId(userId, onSuccess, onFailure) {
  $.getJSON(`http://api.github.com/users/${userId}/repos`)
    .done(data => onSuccess(data))
    .fail(onFailure);
}
