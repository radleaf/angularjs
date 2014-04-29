'use strict';

describe('Directive: yeomanDirective', function () {

  // load the directive's module
  beforeEach(module('yeomanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<yeoman-directive></yeoman-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the yeomanDirective directive');
  }));
});
