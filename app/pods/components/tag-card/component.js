import Ember from 'ember';

const {
  Component,
  computed: {
    alias
  },
  get,
  set
} = Ember

const TagCard = Component.extend({
  classNames: ['col', 'l3', 'm6', 's12'],
  commit: alias('tag.commit.firstObject')
})

TagCard.reopenClass({
  positionalParams: [
    'tag'
  ]
})
export default TagCard
