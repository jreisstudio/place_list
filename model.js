Places = new Meteor.Collection('placesNew');

Places.allow({
  insert: function(){
    return false;
  },
  update: function(){
    return false;
  },
  remove: function(){
    return false;
  }
});

Meteor.methods({
  createPlace: function(options){
    check(options, {name: NonEmptyString, latitude: NonEmptyString , longitude: NonEmptyString , color: NonEmptyString});
    return Places.insert({name:options.name, latitude: options.latitude, longitude: options.longitude, color: options.color});
  },

  removePlace: function(options){
    return Places.remove(options.id);
  }
});

//Verification Examples...

var NonEmptyString = Match.Where(function (x) {
  check(x, String);
  return x.length !== 0;
});