"use strict";

app.controller("NavCtrl", function($location, $rootScope, $scope, $window){
	$scope.logoutUser = () => {
		delete $rootScope.uid;
		$window.localStorage.clear();
		$location.path("/auth");
	};
});