import Ember from 'ember';
const {
  Route,
  RSVP: {
    hash
  }
} = Ember
export default Route.extend({
  model () {
    return hash({
      repo: $.get('https://api.github.com/repos/DankIdeaCentral/migrate-app'),
      pulls: $.get('https://api.github.com/repos/DankIdeaCentral/migrate-app/pulls'),
      tags: $.get('https://api.github.com/repos/DankIdeaCentral/migrate-app/tags').then(function (tags) {
        return Promise.all(tags.map(function (tag) {
          return new Promise(function (resolve, reject) {
            let commits = tag.commit.url
            resolve($.get({
              url: commits,
              async: false
            }))
          }).then(commit => {
            tag.commit = commit;
            return tag
          })
        }))
    })
  })
  }
});
