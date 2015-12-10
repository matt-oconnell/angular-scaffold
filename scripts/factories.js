myApp.factory('myFactory', function myFactory($http) {
	// Do a bunch of logic stuff that we don't want in the controller
	var exports = {};

	exports.getExamples = function() {
		return $http.get('data/example.json')
			.error(function(data) {
				console.log('There was an error!', data);
			});
	};

	return exports;
});