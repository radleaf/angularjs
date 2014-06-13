'use strict';

angular.module('yeomanApp')
  .filter('yeomanFilter', function () {
    return function (input) {
      return 'yeomanFilter filter: ' + input;
    };
  });
