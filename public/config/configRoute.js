angular.module('GuiaApp').config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "views/home.html",
		controller: "HomeController"
	})
	.when("/anunciante", {
		templateUrl: "views/anunciante-v2.html"
	})
	.when("/ListaCidades", {
		templateUrl: "views/listaCidades.html"
	})
	.when("/ListaCategoria", {
		templateUrl: "views/listaCategorias.html"
	})
	.when("/Contato", {
		templateUrl: "views/contato.html"
	})
	.when("/Login", {
		templateUrl: "views/usuarioLogin.html"
	})
	.when("/QueroAnunciar", {
		templateUrl: "views/queroAnunciar.html"
	})
	.otherwise({
		redirectTo: "/"
	});
});