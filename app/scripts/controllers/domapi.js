'use strict';

angular.module('yeomanApp')
        .controller('DomapiCtrl', function($scope, $window, $location, $interval,$anchorScroll) {
          /*  $document.find("button").on("mouseover", function(event) {
                $window.alert(event.type);
            });*/
            $interval(function () {
                $scope.time = new Date().toTimeString();
            }, 2000);
            $scope.displayAlert = function(msg) {
                $window.alert(msg);
            };
              $scope.show = function(id) {
                $location.hash(id);
            }
        });