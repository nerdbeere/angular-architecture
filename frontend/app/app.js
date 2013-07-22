MyApp.App = angular.module('MyApp', []);

MyApp.App.config(['$routeProvider', function($routeProvider) {
	/**
	 * Routes
	 */
	$routeProvider.
		when('/', {
			templateUrl: MyApp.Config.templateUrl + 'home.html',
			controller: MyApp.Controller.HomeController
		}).
		otherwise({redirectTo: '/'});
	}
]);

MyApp.App.run([function () {
	// initialise the app
}]);