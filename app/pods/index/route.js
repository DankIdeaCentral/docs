import Ember from 'ember';
import InfinityRoute from 'ember-infinity/mixins/route'
import ENV from 'migrate-app/config/environment'

const {
  Route,
  isEmpty,
  get,
  set,
  inject: {
    service
  }
} = Ember

export default Route.extend(InfinityRoute, {
  githubSession: service(),
  _canLoadMore: true,

  init () {
    this._super(...arguments)
    get(this, 'githubSession').set('githubAccessToken', ENV.githubToken)
  },
  model (params) {
    return this.infinityModel('tag', {
      startingPage: 1,
      perPage: 4
    })
  },
  afterInfinityModel (posts) {
    if (isEmpty(posts.toArray())) {
      set(this, '_canLoadMore', false)
    }
  }
});
