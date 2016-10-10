import Ember from 'ember';

export function decrement(params) {
  return params[0] - 1
}

export default Ember.Helper.helper(decrement);
