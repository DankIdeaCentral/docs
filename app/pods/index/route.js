import Ember from 'ember';
import ENV from 'migrate-app/config/environment'
const {
  Route,
  get,
  inject: {
    service
  }
} = Ember

export default Route.extend({
  githubSession: service(),
  model () {
    get(this, 'githubSession').set('githubAccessToken', ENV.githubToken)
    return get(this, 'store').findAll('tag')
  }
});
