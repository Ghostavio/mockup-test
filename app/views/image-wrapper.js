import Ember from 'ember';

export default Ember.View.extend({
  attributeBindings: ['class', 'data-num'],
  didInsertElement: function() {
    var num = this.get('data-num') + 1;
    this.$().addClass('num' + num);
    // if it's a label, we set the 'for' attribute
    if(this.tagName === 'label') {
      this.$().attr('for', 'slide' + num);
    }
  }
});
