import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  primaryKey: 'name',
  normalizeResponse (store, model, payload, id, requestType) {
    return {
      data: payload.map(item => {
        return {
          id: item.name,
          type: 'tag',
          attributes: {
             name: item.name,
             tarball_url: item.tarball_url,
             zipball_url: item.zipball_url
          },
          relationships: {
            commit: {
              links: {
                self: item.commit.sha
              },
              data: [{
                type: 'commit',
                id: item.commit.sha
              }]
            }
          }
        }
      })
    }
  }
});
