"use strict";

app.controller("WishlistCtrl", function($rootScope, $scope, MovieService){

	const getMovies = () => {
		MovieService.getWishlistMovies($rootScope.uid).then((results) =>{
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