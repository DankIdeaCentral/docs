import DS from 'ember-data';
export default DS.Model.extend({
  author: DS.attr(),
  comments_url: DS.attr('string'),
  commit: DS.attr(),
  files: DS.attr(),
  html_url: DS.attr('string'),
  stats: DS.attr(),
  url: DS.attr('string'),
  sha: DS.attr('string')
});
