import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    favorite: function(property) {
      property.toggleProperty('favorite');
      property.save();
    }
  }
});
