import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'a',
  classNames: ['accordion-title'],
  click: function() {
    this.$().parent().next().toggleClass('animate-in accordion-item-collapsed');
  }
});
