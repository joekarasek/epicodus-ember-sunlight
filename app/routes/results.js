import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=91ac7ae7c39c47fbaf3508b258fc2d7d&zip=' + params.zip;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON.results);
     return responseJSON.results;
   });
  }
});
