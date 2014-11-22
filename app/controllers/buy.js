import Ember from 'ember';

export default Ember.ObjectController.extend({
  facebookUrl: function() {
    return window.location.href;
  }.property('currentPath'),
  currentPathDidChange: function() {
    this.set('facebookUrl', 'https://www.facebook.com/dialog/share?app_id=1542463255991591&display=popup&href=' + window.location.href + '&redirect_uri=' + window.location.href);
  }.observes('currentPath'),
  increment: function() {
    var num = this.get('data-num') + 1;
    if(this.type === 'radio') {
      this.$().attr('id', 'slide' + num);
      // check the first radio button to set the first image
      if(num === 1) {
        this.$().prop('checked', true);
      }
    }
  },
  actions: {
    favorite: function(property) {
      property.toggleProperty('favorite');
      property.save();
    }
  }
});
