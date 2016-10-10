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
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  init () {
    get(this, 'githubSession').set('githubAccessToken', ENV.githubToken)
  },
  model (params) {
    return get(this, 'store').query('tag', {
      page: params.page,
      per_page: 4
    })
  }
});
