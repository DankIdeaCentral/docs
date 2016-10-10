import Ember from 'ember';

const {
  Component,
  get,
  set
} = Ember

const TagCard = Component.extend({
  classNames: ['col', 'l3', 'm6', 's12'],
  isVisible: false,
  init () {
    this._super(...arguments)
    $.get(get(this, 'tag').commit.url).then(commit => {
      set(this, 'commit', commit)
      set(this, 'isVisible', true)
    })
  }
})

TagCard.reopenClass({
  positionalParams: [
    'tag'
  ]
})
export default TagCard
