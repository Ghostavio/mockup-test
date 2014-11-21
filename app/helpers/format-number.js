import Ember from 'ember';

export function formatNumber(input, n, x) {
  // @param integer/float input: value to be formated
  // @param integer n: length of decimal
  // @param integer x: length of sections
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  input = input ? input.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,') : '';
  return input;
}

export default Ember.Handlebars.makeBoundHelper(formatNumber);
