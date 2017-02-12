'use strict';
describe('Users App', function() {

  it('should redirect index.html to index.html#/users', function() {
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/users');
      });
  });
});
