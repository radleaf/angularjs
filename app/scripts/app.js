'use strict';
angular
  .module('yeomanApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.sortable',
    'LocalStorageModule'
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
      .otherwise({
        redirectTo: '/'
      });
  });
