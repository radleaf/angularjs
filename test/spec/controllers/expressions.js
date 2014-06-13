'use strict';

describe('Controller: ExpressionsCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanApp'));

  var ExpressionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpressionsCtrl = $controller('ExpressionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
