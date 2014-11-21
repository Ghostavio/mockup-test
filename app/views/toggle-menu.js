import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'button',
  classNames: ['toggle-menu-button'],
  click: function() {
    window.$('.menu-list').toggleClass('show-menu');
  }
});
