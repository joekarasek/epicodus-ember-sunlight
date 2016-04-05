import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://realtime.influenceexplorer.com/api/candidates/?fec_id=P00003392&apikey=91ac7ae7c39c47fbaf3508b258fc2d7d';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results);
      return responseJSON.results;
    });
   }
});
