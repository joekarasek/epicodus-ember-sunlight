import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['birthday:asc'],
  sortedLegislators: Ember.computed.sort('legislators', 'sortBy'),
});
