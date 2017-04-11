function initMap() {
  var map = new google.maps.Map(document.getElementById('GPS'), {
    center: {lat: -21.7872675, lng: -48.1619931},
    zoom: 13
  });

  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      // infoWindow.setPosition(pos);
      // infoWindow.setContent('Location found.');

      var image = '../assets/images/ico/user.png';
      var beachMarker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: image
      });

      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Falha ao encontrar sua localização' :
    'Error: Your browser doesn\'t support geolocation.');
}