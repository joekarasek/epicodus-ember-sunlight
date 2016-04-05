import Ember from 'ember';

export function partyTag(params/*, hash*/) {
  var partyID = params[0];
  if (partyID==="D") {
    return Ember.String.htmlSafe('<strong style="color:blue;">Democrat</strong>');
  } else if (partyID==="R") {
    return Ember.String.htmlSafe('<strong style="color:red;">Republican</strong>');
  } else {
    return Ember.String.htmlSafe('<strong>Unaffliated</strong>');
  }
}

export default Ember.Helper.helper(partyTag);
