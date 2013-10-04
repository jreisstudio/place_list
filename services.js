
var map;
renderize_map = function (places){
  var mapOptions = {
        center: new google.maps.LatLng(12 ,12),
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        
      };
     map= new google.maps.Map(document.getElementById("map"), mapOptions);
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
