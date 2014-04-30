'use strict';

angular.module('yeomanApp')
        .controller('MainCtrl', function($scope, localStorageService, dataService) {
            dataService.success(function(data) {
                console.log(data);
                $scope.restful = "Hello HTTP Service " + data;
            });
            var todosInStore = localStorageService.get('todos');

            $scope.todos = todosInStore && todosInStore.split('\n') || [];

            $scope.$watch('todos', function() {
                localStorageService.add('todos', $scope.todos.join('\n'));
            }, true);

            $scope.addTodo = function() {
                $scope.todos.push($scope.todo);
                $scope.todo = '';
            };

            $scope.removeTodo = function(index) {
                $scope.todos.splice(index, 1);
            };

        });