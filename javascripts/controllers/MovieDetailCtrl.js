"use strict";

app.controller("MovieDetailCtrl", function($routeParams, $scope, MovieService){
	$scope.movie = {};


	const getMovie = () => {
		MovieService.getSingleMovie($routeParams.id).then((results) => {
		$scope.movie = results.data;
		}).catch((error) => {
		console.log("error in getSingleMovie", error);
		});
	};

	getMovie();
	

	$scope.switchWatched = (movie, movieId) => {
		movie.isWatched = true;
		let updatedMovie = MovieService.createMovieObject(movie);
		MovieService.updateMovie(updatedMovie, $routeParams.id).then((result) => {
			getMovie();
		}).catch((error) => {
			console.log("error in updateMovie", error);
		});
	};

	$scope.starChange = (event, movie) => {
		if(event.rating) {
			movie.rating = event.rating;
			let updatedMovie = MovieService.createMovieObject(movie);
			MovieService.updateMovie(updatedMovie, $routeParams.id).then(() => {
				getMovie();
			}).catch((error) => {
				console.log("error in updateMovie", error);
			});
		}
	};





});