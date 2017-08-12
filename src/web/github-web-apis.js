import $ from 'jquery';

export function getMembersForOrg(org, onSuccess, onFailure) {
  $.getJSON(`http://api.github.com/orgs/${org}/members`)
    .done(data => onSuccess(data))
    .fail(onFailure);
}

export function getDetailsForUserId(userId, onSuccess, onFailure) {
  $.getJSON(`http://api.github.com/users/${userId}`)
    .done(data => onSuccess(data))
    .fail(onFailure);
}
