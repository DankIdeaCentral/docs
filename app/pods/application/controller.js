import Ember from 'ember';
const {
  Controller,
  computed: {
    alias
  }
} = Ember

export default Controller.extend({
  tags: alias('model.tags')
});
