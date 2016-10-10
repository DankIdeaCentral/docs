import DS from 'ember-data';

export default DS.Model.extend({
  "login": DS.attr('string'),
  "avatar_url": DS.attr('string'),
  "gravatar_id": DS.attr('string'),
  "url": DS.attr('string'),
  "html_url": DS.attr('string'),
  "followers_url": DS.attr('string'),
  "following_url": DS.attr('string'),
  "gists_url": DS.attr('string'),
  "type": DS.attr('string'),
  "contributions": DS.attr('number')
});
