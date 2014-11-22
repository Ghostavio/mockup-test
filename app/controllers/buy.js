import Ember from 'ember';

export default Ember.ObjectController.extend({
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
