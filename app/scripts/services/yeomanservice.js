'use strict';
var services = angular.module('yeomanApp');
services.factory('dataService', function($http) {
    return $http.get('data.json');
});