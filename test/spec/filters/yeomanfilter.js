'use strict';

describe('Filter: yeomanFilter', function () {

  // load the filter's module
  beforeEach(module('yeomanApp'));

  // initialize a new instance of the filter before each test
  var yeomanFilter;
  beforeEach(inject(function ($filter) {
    yeomanFilter = $filter('yeomanFilter');
  }));

  it('should return the input prefixed with "yeomanFilter filter:"', function () {
    var text = 'angularjs';
    expect(yeomanFilter(text)).toBe('yeomanFilter filter: ' + text);
  });

});
