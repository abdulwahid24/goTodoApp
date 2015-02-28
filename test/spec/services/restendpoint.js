'use strict';

describe('Service: restEndPoint', function () {

  // load the service's module
  beforeEach(module('goTodoAppApp'));

  // instantiate service
  var restEndPoint;
  beforeEach(inject(function (_restEndPoint_) {
    restEndPoint = _restEndPoint_;
  }));

  it('should do something', function () {
    expect(!!restEndPoint).toBe(true);
  });

});
