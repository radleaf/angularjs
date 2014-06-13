'use strict';

angular.module('yeomanApp')
        .controller('ExecptionsCtrl', function($scope, $exceptionHandler,$sce) {
            $scope.throwEx = function() {
                try {
                    throw new Error("Triggered Exception");
                } catch (ex) {
                    $exceptionHandler(ex, "Button Click");
                }
            };
            $scope.dangerousData
                    = "<p>This is <b onmouseover=alert('Attack!')>dangerous</b> data</p>";
            $scope.$watch("dangerousData", function(newValue) {
                $scope.htmlData = $sanitize(newValue);
            });
             $scope.$watch("htmlData", function (newValue) {
                $scope.trustedData = $sce.trustAsHtml(newValue);
            });
        })
        .factory("$exceptionHandler", function($log) {
            return function(exception, cause) {
                $log.error("Message: " + exception.message + " (Override Error Handler Cause: " + cause + ")");
            }
        });
