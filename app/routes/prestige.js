import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('property', 1);
  },

  // since we reusing the "buy" template everywhere, this just
  // renders that template for us, just changing the data.
  renderTemplate: function(controller, model) {
    var buyController = this.controllerFor('buy');
    this.render('buy', {
      controller: buyController,
      model: model
    });
  }
});
