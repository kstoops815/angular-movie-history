"use strict";

app.controller("SearchCtrl", function($scope, tmdbService){

	$scope.enterPush = (event) => {
		if(event.keyCode === 13){
			console.log("event", event.target.value);
			tmdbService.searchMovies(event.target.value).then((results) => {
		console.log("movies?", results.data.results);
	}).catch((error) => {
		console.log("error in searchMovies", error);
	});
		}
		
	};

	
});