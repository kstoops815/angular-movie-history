"use strict";

app.service("MovieService", function($http, $q, FIREBASE_CONFIG){
	const getRatedMovies = (userUid) => {
		let movies = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/movies.json?orderBy="uid"&equalTo="${userUid}"`).then((results) =>{
				let fbMovies = results.data;
				console.log("results", results);
				Object.keys(fbMovies).forEach((key) => {
  					fbMovies[key].id = key;
  					if(fbMovies[key].isWatched){
  						movies.push(fbMovies[key]);
  					}
  				resolve(movies);
  				});
			}).catch((error) => {
				reject(error);
			});
		});
	};

	const getWishlistMovies = (userUid) => {
		let movies = [];
		console.log("userUid", userUid);
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/movies.json?orderBy="uid"&equalTo="${userUid}"`).then((results) =>{
				let fbMovies = results.data;
				console.log("results", results);
				Object.keys(fbMovies).forEach((key) => {
  					fbMovies[key].id = key;
  					if(!fbMovies[key].isWatched){
  						movies.push(fbMovies[key]);
  					}
  				resolve(movies);
  				});
			}).catch((error) => {
				reject(error);
			});
		});
	};


	const postNewMovie = (newMovie) => {
		console.log("newMovie", newMovie);
		console.log(FIREBASE_CONFIG);
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/movies.json`, JSON.stringify(newMovie));
	};

	const deleteMovie = (movieId) => {
		return $http.delete(`${FIREBASE_CONFIG.databaseURL}/movies/${movieId}.json`);
	};


	const updateMovie =(movie, movieId) => {
		return $http.put(`${FIREBASE_CONFIG.databaseURL}/movies/${movieId}.json`, JSON.stringify(movie));
	};

	const createMovieObject = (movie) => {
		return {
			"title": movie.title,
			"overview": movie.overview,
			"poster_path": movie.poster_path,
			"rating": movie.rating,
			"isWatched": movie.isWatched,
			"uid": movie.uid
		};
	};

	const getSingleMovie = (movieId) => {
		return $http.get(`${FIREBASE_CONFIG.databaseURL}/movies/${movieId}.json`);
	};


	return {getSingleMovie, getRatedMovies, getWishlistMovies, postNewMovie, deleteMovie, updateMovie, createMovieObject};
});

