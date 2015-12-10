'use strict';

/* App Module */
var myApp = angular.module('myApp', [
	'ngRoute',
	'myControllers'
]);

myApp.config(
	function($routeProvider) {
		$routeProvider.
			when('/page1', {
				templateUrl: 'templates/page1.html',
				controller: 'FirstCtrl'
			}).
			when('/page2', {
				templateUrl: 'templates/page2.html',
				controller: 'SecondCtrl'
			}).
			otherwise({
				redirectTo: '/page1'
			});
	});