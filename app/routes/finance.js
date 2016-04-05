import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://realtime.influenceexplorer.com/api/candidates/?fec_id=' + params.fec_id + '&apikey=91ac7ae7c39c47fbaf3508b258fc2d7d';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results[0]);
      return responseJSON.results[0];
    });
   }
});
