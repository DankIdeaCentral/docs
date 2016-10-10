import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  primaryKey: 'sha',
  keyForRelationship: function(key, relationship, method) {
    return 'rel_' + Ember.String.underscore(key);
  }
});
