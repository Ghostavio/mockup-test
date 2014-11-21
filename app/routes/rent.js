import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('property', 2);
  },
  renderTemplate: function(controller, model) {
    var buyController = this.controllerFor('buy');
    this.render('buy', {
      controller: buyController,
      model: model
    });
  }
});
