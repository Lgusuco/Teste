var neighborhoods = [
{lat: -21.7904108, lng: -48.1740547},
{lat: -21.782042, lng: -48.2015637},
{lat: -21.795756, lng: -48.183371},
{lat: -21.777993, lng: -48.139563}
];

var localShop = [
{lat: -21.784274, lng: -48.200343},
{lat: -21.791145, lng: -48.174143},
{lat: -22.906896, lng: -43.188931}
];

var localPosto = [
{lat: -21.779025, lng: -48.179602},
{lat: -21.840963, lng: -48.148184}, 
{lat: -21.802028, lng: -48.184788},
{lat: -21.823709, lng: -48.154923},
{lat: -21.790676, lng: -48.153286}
];

var markers = [];
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -21.7872675, lng: -48.1619931},
    zoom: 13
  });

  var input = document.getElementById('pac-input');

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map
  });
  // marker.addListener('click', function() {
  //   infowindow.open(map, marker);
  // });

  autocomplete.addListener('place_changed', function() {
    infowindow.close();
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    // Set the position of the marker using the place ID and location.
    marker.setPlace({
      placeId: place.place_id,
      location: place.geometry.location
    });
    marker.setVisible(true);
  });

  // var infoWindow = new google.maps.InfoWindow({map: map});

  // // Try HTML5 geolocation.
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     var pos = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     };

  //     // infoWindow.setPosition(pos);
  //     // infoWindow.setContent('Location found.');

  //     var image = '../assets/images/ico/user.png';
  //     var beachMarker = new google.maps.Marker({
  //       position: pos,
  //       map: map,
  //       icon: image
  //     });

  //     map.setCenter(pos);
  //   }, function() {
  //     handleLocationError(true, infoWindow, map.getCenter());
  //   });
  // } else {
  //   // Browser doesn't support Geolocation
  //   handleLocationError(false, infoWindow, map.getCenter());
  // }

  drop();
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Falha ao encontrar sua localização' :
    'Error: Your browser doesn\'t support geolocation.');
}

function drop() {
  clearMarkers();
  for (var i = 0; i < neighborhoods.length; i++) {
    addMarkerWithTimeout(neighborhoods[i], i * 200);
  }
}

function dropShop() {
  clearMarkers();
  for (var i = 0; i < localShop.length; i++) {
    addMarkerWithTimeout(localShop[i], i * 200);
  }
}

function dropPosto() {
  clearMarkers();
  for (var i = 0; i < localPosto.length; i++) {
    addMarkerWithTimeout(localPosto[i], i * 200);
  }
}

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP
    }));
  }, timeout);
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}