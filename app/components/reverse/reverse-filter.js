'use strict';

/* Filters */

angular.module('myPeeps')
  .filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
  });
