'use strict';

var myControllers = angular.module('myControllers', ['ngRoute']);

myControllers.controller('AboutController', ['$scope', '$route', 
	function ($scope, $route) {
		$scope.template = $route.current.templateUrl;	
	}
]);

myControllers.controller('ShowcaseController', ['$scope', '$route',
	function ($scope, $route) {
		$scope.template = $route.current.templateUrl;	
	}
]);

myControllers.controller('ContactController', ['$scope', '$route',
	function ($scope, $route) {
		$scope.template = $route.current.templateUrl;	
	}
]);