'use strict';

describe('Controller: PromiseCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanApp'));

  var PromiseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PromiseCtrl = $controller('PromiseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
