var map;
renderize_map = function (places){
  var mapOptions = {
        center: new google.maps.LatLng(47.36865 , 8.539183),
        zoom: 3,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        
      };
     map= new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
      places.forEach(function (place) {
        var pinColor = place.color.replace("#","");
        var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

      var marker = new google.maps.Marker({
                  position: new google.maps.LatLng(place.latitude, place.longitude),
                  title: place.name,
                  icon: pinImage,
                  map: map
              });
    });
}