'use strict';

// Declare app level module which depends on views, and components & dependecies
angular.module('myPeeps', [
  'ngRoute',
  'firebase',

  'myApp.config',
  'myApp.security',

  'firebase.appauth',

  'myApp.home',
  'myApp.account',
  'myApp.login',

  'myPeeps.peeps'
])

.config(['$routeProvider', function ($routeProvider) {
    // Initialize Firebase
    var config = {
       apiKey: PRIVATE.firebase_api,
       authDomain: PRIVATE.firebase_authDomain,
       databaseURL: PRIVATE.firebase_databaseURL
    };
    firebase.initializeApp(config);

    $routeProvider.otherwise({
      redirectTo: '/peeps'
      //redirectTo: '/home'
    });
}])
  
.run(['$rootScope', 'Auth', function($rootScope, Auth) {
    // track status of authentication
    Auth.$onAuthStateChanged(function(user) {
      $rootScope.loggedIn = !!user;
    });
}]);
