import $ from 'jquery';

export function getMembersForOrg(org) {
  $.getJSON(`http://api.github.com/orgs/${org}/members`)
    .done(data => console.dir(data))
    .fail(() => console.log('Organization retrieval failed'));
}
