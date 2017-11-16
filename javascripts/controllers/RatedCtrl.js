"use strict";

app.controller("RatedCtrl", function($rootScope, $scope, MovieService){
	$scope.movies = [];

	const getMovies = () => {
		MovieService.getRatedMovies($rootScope.uid).then((results) =>{
		$scope.movies = results;
	}).catch((error) => {
		console.log("error in getRatedMovies", error);
	});
	};

	getMovies();


	$scope.deleteMovie = (movieId) => {
		MovieService.deleteMovie(movieId).then((result) =>{
			getMovies();
		}).catch((error) => {
			console.log("error in deleteMovie", error);
		});
	};
});