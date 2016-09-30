import Ember from 'ember';
const {
  Controller,
  get,
  set,
  observer,
  computed: {
    alias
  },
  $: {
    ajax
  }
} = Ember
export default Controller.extend({
  queryParams: ['page'],
  repos: null,
  page: 1,
  pageObserver: Ember.observer('page', function () {
    const page = get(this, 'page')
    const url = `http://api.github.com/orgs/ciena-frost/repos?page=${page}&per_page=10`
    return ajax(url).then((repos) => {
      set(this, 'repos', repos)
    })
  }).on('init')
});
