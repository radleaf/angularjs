'use strict';

angular.module('yeomanApp')
        .directive('promiseWorker', function($q) {
            var deferred = $q.defer();
            return {
                link: function(scope, element, attrs) {
                    element.find('button').on('click', function(event) {
                        var buttonText = event.target.innerText;
                        if (buttonText === 'Abort') {
                            deferred.reject('Aborted');
                        } else {
                            deferred.resolve(buttonText);
                        }
                    });
                },
                controller: function($scope, $element, $attrs) {
                    this.promise = deferred.promise;
                }
            };
        })
          .directive('promiseObserver', function() {
            return {
                require: '^promiseWorker',
                link: function (scope, element, attrs, ctrl) {
                  ctrl.promise
                    .then(function (result) {
                        return "Success (" + result + ")";
                    }).then(function(result) {
                        element.text(result);
                    });
                }
            };
        })
        .controller('PromiseCtrl', function($scope) {

        });
