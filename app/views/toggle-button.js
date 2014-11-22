import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'button',
  attributeBindings: ['class', 'data-target', 'data-class-name'],
  click: function() {
    var target    = this.$().data('target'),
        className = this.$().data('class-name');
    window.$(target).toggleClass(className);
  }
});
