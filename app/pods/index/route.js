import Ember from 'ember';

const {
  Route
} = Ember

export default Route.extend({
  model () {
    return $.get('https://api.github.com/repos/DankIdeaCentral/migrate-app/tags')
  }
});
