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
		.otherwise({redirectTo: '/about'});
}]);
