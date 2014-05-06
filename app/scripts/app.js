'use strict';
angular
  .module('yeomanApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.sortable',
    'LocalStorageModule',
    'ngSanitize'
  ]).config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('radx');
}])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/domApi', {
        templateUrl: 'views/domapi.html',
        controller: 'DomapiCtrl'
      })
       .when('/expressions', {
        templateUrl: 'views/expressions.html',
        controller: 'ExpressionsCtrl'
      })
      .when('/execptions', {
        templateUrl: 'views/execptions.html',
        controller: 'ExecptionsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
