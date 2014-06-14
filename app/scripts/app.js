'use strict';

angular
  .module('gruntApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/direct', {
        templateUrl: 'views/direct.html',
        controller: 'DirectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
