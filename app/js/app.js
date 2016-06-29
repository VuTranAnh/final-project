'use strict';
var myApp = angular.module('myApp', [
	'ngRoute', // using route for this app
	'myControllers', // contains all controllers
	'ngMdIcons' // using mdIcons
	]);

myApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/about', {
			templateUrl: 'view/about.html',
			controller: 'AboutController'
		})
		.when('/showcase', {
			templateUrl: 'view/showcase.html',
			controller: 'ShowcaseController'
		})
		.otherwise({redirectTo: '/about'});
}]);
