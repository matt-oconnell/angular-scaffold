'use strict';

var myControllers = angular.module('myControllers', []);

myControllers.controller('FirstCtrl',
	function($scope, myFactory) {
		myFactory.getExamples()
			.success(function(jsonData, statusCode) {
				console.log('The request was successful!', statusCode, jsonData);
				$scope.examples = jsonData;
			});
	});

myControllers.controller('SecondCtrl',
	function($scope) {
		$scope.vari = 'Second';
	});