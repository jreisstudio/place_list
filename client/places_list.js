Meteor.subscribe('places');

Template.places_list.places = function () {
  places=Places.find({},{sort:{name: 1}});
  return places;

}

Template.places_list.events({
  'click #add':function() {
      options ={};
      options.name = document.getElementById('name').value;
      options.latitude = document.getElementById('latitude').value;
      options.longitude = document.getElementById('longitude').value;
      options.color = document.getElementById('color').value;
      Meteor.call('createPlace',options, function(error,place){
        if(error){
          console.log("Não Foi possível inserir");
        }

      });
      renderize_map(Places.find({},{sort:{name: 1}}));
  },
    'click .plc_remove': function(obj){
      options={};
      options.id=obj.toElement.attributes['data-ref'].value;

      Meteor.call('removePlace',options, function(error,place){
        if(error){
          console.log("Não Foi possível inserir");
        }

      });      
      renderize_map(Places.find({},{sort:{name: 1}}));
    }

});

Template.maps.rendered = function() {
    renderize_map(Places.find({},{sort:{name: 1}}));
    Session.set('map', true);
  }

Template.maps.destroyed = function() {
  Session.set('map', false);
};

Deps.autorun(function() {
  var isMap = Session.get('map');
  if(isMap){
    renderize_map(Places.find({},{sort:{name: 1}}));
  }

});