"use strict";

app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
	$routeProvider
	.when("/auth", {
		templateUrl: "partials/auth.html",
		controller: "AuthCtrl"
	})
	.when("/search", {
		templateUrl: "partials/search.html",
		controller: "SearchCtrl"
	})
	.when("/wishlist", {
		templateUrl: "partials/wishlist.html",
		controller: "WishlistCtrl"
	})
	.when("/rated", {
		templateUrl: "partials/rated.html",
		controller: "RatedCtrl"
	})
	.otherwise("/auth");
});