import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'button',
  classNames: ['toggle-sidebar-button'],
  click: function() {
    $('.sidebar').toggleClass('show-sidebar');
  }
});
