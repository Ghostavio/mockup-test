import Ember from 'ember';
import config from './config/environment';

window.$.fn.removeClassPrefix = function(prefix) {
  this.each(function(i, el) {
    var classes = el.className.split(" ").filter(function(c) {
      return c.lastIndexOf(prefix, 0) !== 0;
    });
    el.className = window.$.trim(classes.join(" "));
  });
  return this;
};

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('buy');
  this.route('rent');
  this.route('commercial');
  this.route('prestige');
});

Router.reopen({
  notifyGoogleAnalytics: function() {
    var currentURL = this.get('url');
    if(!window.$('body').hasClass('initial-load')) {
      window.googletag.pubads().refresh();
    }
    window.$('body').removeClass('initial-load');
    if(currentURL === '/') {
      window.$('body').removeClassPrefix('style-').addClass('style-buy');
    } else {
      window.$('body').removeClassPrefix('style-').addClass('style-'+currentURL.substr(1,currentURL.length));
    }
    return window.ga('send', 'pageview', {
      'page': currentURL,
      'title': currentURL
    });
  }.on('didTransition')
});

export default Router;
