import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', { path: '/results/:zip'});
  this.route('finance', { path: '/finance/:fec_id'});
});

export default Router;
