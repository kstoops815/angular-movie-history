"use strict";

app.service("tmdbService", function($http, TMDB_CONFIG){
	const searchMovies = (query) => {
		return $http.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_CONFIG}&language=en-US&page=1&include_adult=false&query=${query}`);
	};

	const tmdbConfiguration = () => {
		return $http.get(`https://api.themoviedb.org/3/configuration?api_key=${TMDB_CONFIG}`);
	};
	
	return {searchMovies, tmdbConfiguration};
});

