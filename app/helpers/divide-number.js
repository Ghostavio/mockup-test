import Ember from 'ember';

export function divideNumber(value1, value2) {
  return (value1/value2).toFixed(0).replace(/\d(?=(\d{3})+$)/g, '$&,');
}

export default Ember.Handlebars.makeBoundHelper(divideNumber);
