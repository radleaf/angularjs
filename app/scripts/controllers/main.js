'use strict';
var GruntApp = angular.module('gruntApp');
GruntApp
    .constant('startTime', new Date().toLocaleTimeString())
    .config(function (startTime) {
        console.log('Main module config and loaded at: ' + startTime);
    })
    .run(function (startTime) {
        console.log('Main module dependencies loaded and ready to run at: ' + startTime);
    })
    .controller('MainCtrl', function($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
    $scope.addTodo = function() {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      };
    $scope.removeTodo = function(index) {
        $scope.todos.splice(index, 1);
      };
  });