'use strict';

describe('service', function() {

  // load modules
  beforeEach(module('contactApp'));	
  // Test service availability
  it('check the existence of Contacts factory', inject(function(Contacts) {
      expect(Contacts).toBeDefined();
    }));
});