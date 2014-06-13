'use strict';

describe('Controller: DeploydCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanApp'));

  var DeploydCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeploydCtrl = $controller('DeploydCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
