function initialize() {

  // Exibir mapa;
  var myLatlng = new google.maps.LatLng(-21.7904108, -48.1740547);
  var myLatlng1 = new google.maps.LatLng(-21.782042, -48.2015637,17);
  var myLatlng2 = new google.maps.LatLng(-21.795756, -48.183371);
  var myLatlng3 = new google.maps.LatLng(-21.777993, -48.139563); 
  var myLatlng4 = new google.maps.LatLng(-21.801673, -48.158322); 

  var mapOptions = {
  	zoom: 14,
  	center: myLatlng,
  	panControl: false,
  	mapTypeId: google.maps.MapTypeId.ROADMAP
  }

 // Parâmetros do texto que será exibido no clique;
 var contentString = '<div class="publicador-mapa"><img alt="100%x200" data-src="holder.js/100%x200" src="../assets/images/logo-mapa/gusmao.png" data-holder-rendered="true" style="height: 100px; width: 150px;"><h2>Gusmão Moda Masculina</h2><p>Lojas de roupa masculina</p><a href="#" class="btn-mapa">Saiba mais.</a></div>'

 var infowindow = new google.maps.InfoWindow({
 	content: contentString,
 	maxWidth: 700
 });

  // Exibir o mapa na div #mapa;
  var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);


  // Marcador personalizado;
  var image = '../assets/images/ico/map1.png';
  var marcadorPersonalizado = new google.maps.Marker({
  	position: myLatlng,
  	map: map,
  	icon: image,
  	title: 'Centro - Araraquara',
  	animation: google.maps.Animation.DROP
  });

  var image = '../assets/images/ico/map-comercio.png';
  var marcadorPersonalizado = new google.maps.Marker({
  	position: myLatlng1,
  	map: map,
  	icon: image,
  	title: 'Marco Zero - Recife/PE',
  	animation: google.maps.Animation.DROP
  });

  var image = '../assets/images/ico/map-parque.png';
  var marcadorParque = new google.maps.Marker({
  	position: myLatlng2,
  	map: map,
  	icon: image,
  	title: 'Marco Zero - Recife/PE',
  	animation: google.maps.Animation.DROP
  });

  var image = '../assets/images/ico/map-comercio.png';
  var marcadorPersonalizado = new google.maps.Marker({
  	position: myLatlng3,
  	map: map,
  	icon: image,
  	title: 'Marco Zero - Recife/PE',
  	animation: google.maps.Animation.DROP
  });

  var image = '../assets/images/ico/map-igreja.png';
  var marcadorPersonalizado = new google.maps.Marker({
  	position: myLatlng4,
  	map: map,
  	icon: image,
  	title: 'Teste',
  	animation: google.maps.Animation.DROP
  });

  // Exibir texto ao clicar no pin;
  google.maps.event.addListener(marcadorPersonalizado, 'click', function() {
  	infowindow.open(map,marcadorPersonalizado);
  });

  google.maps.event.addListener(marcadorParque, 'click', function() {
  	infowindow.open(map,marcadorParque);
  });

}


// Função para carregamento assíncrono
function loadScript() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDeHb17So0QupSGO_d6b8X-OyvJ32UQehs&sensor=true&callback=initialize";
	document.body.appendChild(script);
}

window.onload = loadScript;