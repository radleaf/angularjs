'use strict';

angular.module('yeomanApp')
  .directive('yeomanDirective', function () {
    return {     
    link: function(scope, element, attrs, controller) {
                                element[0].focus();
                            }
    };
  });
