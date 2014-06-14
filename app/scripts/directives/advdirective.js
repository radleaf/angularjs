'use strict';

angular.module('gruntApp')
  .directive('advDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the advDirective directive');
      }
    };
  });
