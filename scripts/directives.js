myApp.directive('countdown', function countdown() {
	return {
		restrict: 'EA',
		scope: true,
		replace: true,
		templateUrl: 'templates/countdown.html',
		controller: function($scope) {
			$scope.time = 'Time goes here!';
		},
		//
		link: function(scope, element, attrs) {
			element.css('color', 'green');
		}
	}
});