'use strict';

describe('Service: Logservice', function () {

  // load the service's module
  beforeEach(module('yeomanApp'));

  // instantiate service
  var Logservice;
  beforeEach(inject(function (_Logservice_) {
    Logservice = _Logservice_;
  }));

  it('should do something', function () {
    expect(!!Logservice).toBe(true);
  });

});
