'use strict';

describe('Service: Yeomanservice', function () {

  // load the service's module
  beforeEach(module('yeomanApp'));

  // instantiate service
  var Yeomanservice;
  beforeEach(inject(function (_Yeomanservice_) {
    Yeomanservice = _Yeomanservice_;
  }));

  it('should do something', function () {
    expect(!!Yeomanservice).toBe(true);
  });

});
