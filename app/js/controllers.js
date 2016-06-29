'use strict';

var myControllers = angular.module('myControllers', ['ngRoute']);

myControllers.controller('AboutController', ['$scope', '$route', 
	function ($scope, $route) {
		$scope.template = $route.current.templateUrl;

		this.profile = {
			name: "Tran Anh Vu",
			age: 23,
			imageUrl: '../images/crying_baby.jpg',
			about_me: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
		};
	}
]);

myControllers.controller('ShowcaseController', ['$scope', '$route',
	function ($scope, $route) {
		$scope.template = $route.current.templateUrl;	
	}
]);


