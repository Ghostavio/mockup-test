import Ember from 'ember';

export default Ember.Route.extend({
  // our home page is the "buy" template
  redirect: function() {
    this.transitionTo('buy');
  }
});
