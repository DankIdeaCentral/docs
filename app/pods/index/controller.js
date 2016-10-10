import Ember from 'ember';
const {
  Controller
} = Ember
export default Ember.Controller.extend({
  queryParams: ['page'],
  page: 1
});
