import BaseAdapter from './base'

export default BaseAdapter.extend({
  buildURL (modelName, id, snapshot, requestType, query) {
    let result = this._super(...arguments)
    return `${result}?page=${query.page}&per_page=${query.per_page}`
  }
})
