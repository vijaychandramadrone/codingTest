'use strict';

describe('service', function() {

  // load modules
  beforeEach(module('userApp'));	
  // Test service availability
  it('check the existence of User factory', inject(function(Users) {
      expect(Users).toBeDefined();
    }));
});