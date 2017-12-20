"use strict";

app.controller("RatedCtrl", function($location, $rootScope, $scope, MovieService){
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

	$scope.starChange = (event, movie) => {
		if(event.rating) {
			movie.rating = event.rating;
			let updatedMovie = MovieService.createMovieObject(movie);
			MovieService.updateMovie(updatedMovie, movie.id).then(() => {
				getMovies();
			}).catch((error) => {
				console.log("error in updateMovie", error);
			});
		}
	};

	$scope.movieDetail = (movieId) => {
		$location.path(`/movie/${movieId}`);
	};

});