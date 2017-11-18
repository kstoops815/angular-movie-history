"use strict";

app.controller("WishlistCtrl", function($location, $rootScope, $scope, MovieService){

	const getMovies = () => {
		MovieService.getWishlistMovies($rootScope.uid).then((results) =>{
			console.log("results", results);
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

	$scope.switchWatched = (movie, movieId) => {
		console.log("movieId", movieId);
		movie.isWatched = true;
		console.log("switchWatched", movie);
		let updatedMovie = MovieService.createMovieObject(movie);
		MovieService.updateMovie(updatedMovie, movieId).then((result) => {
			console.log("result", result);
			getMovies();
		}).catch((error) => {
			console.log("error in updateMovie", error);
		});
	};

	$scope.movieDetail = (movieId) => {
		$location.path(`/movie/${movieId}`);
	};

});