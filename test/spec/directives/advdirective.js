'use strict';

describe('Directive: advDirective', function () {

  // load the directive's module
  beforeEach(module('gruntApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<adv-directive></adv-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the advDirective directive');
  }));
});
