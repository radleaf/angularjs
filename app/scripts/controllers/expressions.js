'use strict';

var myApp = angular.module('yeomanApp');
myApp.controller("compileCtrl", function($scope) {
    $scope.cities = ["London", "Paris", "New York"];
})
        .directive("evalExpressions", function($compile) {
            return function(scope, element, attrs) {
                var content = "<ul><li ng-repeat='city in cities'>{{city}}</li></ul>"
                var listElem = angular.element(content);
                var compileFn = $compile(listElem);
                compileFn(scope);
                element.append(listElem);
            };
        });
myApp.controller('ExpressionsCtrl', function($scope, $routeParams) {
    $scope.order_id = $routeParams.orderId;
    $scope.price = "100.23";
})
        .directive("evalExpression", function($parse) {
            return function(scope, element, attrs) {
                scope.$watch(attrs["evalExpression"], function(newValue) {
                    try {
                        var expressionFn = $parse(scope.expr);
                        var result = expressionFn(scope);
                        if (result === undefined) {
                            result = "No result";
                        }
                    } catch (err) {
                        result = "Cannot evaluate expression";
                    }
                    element.text(result);
                });
            };
        });



