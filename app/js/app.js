'use strict';
var myApp = angular.module('myApp', [
	'ngRoute',
	'myControllers'
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
		.when('/contact', {
			templateUrl: 'view/contact.html', 
			controller: 'ContactController'
		})
		.otherwise({redirectTo: '/about'});
}]);
