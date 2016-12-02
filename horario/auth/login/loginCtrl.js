angular.module("app")
.controller("loginCtrl", ["$scope", '$http', 'authServices', function($scope, $http, authServices) {
	$scope.login = function() {
		authServices.Login($scope.document, $scope.password, function(response) {
			if (response.status == 'OK') {
				authServices.SetCredentials(response.token);
			} else {
				console.log(response);
			}
		});
	};
}]);