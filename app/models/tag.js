import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  zipball_url: DS.attr('string'),
  tarball_url: DS.attr('string'),
  commit: DS.hasMany('commit', {
    async: true,
    inverse: false
  })
});
