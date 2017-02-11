'use strict';

/* jasmine specs for controllers go here */
describe('Contact controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('contactApp'));
  beforeEach(module('contactServices'));

  describe('ContactListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('contacts/contacts.json').
          respond([{name: 'Ravi'}, {name: 'Vijay'}, {name: 'Sharat'}]);

      scope = $rootScope.$new();
      ctrl = $controller('ContactListCtrl', {$scope: scope});
    }));


    it('should create "contact" model with 3 contacts fetched from xhr', function() {
      expect(scope.contacts).toEqualData([]);
      $httpBackend.flush();

      expect(scope.contacts).toEqualData([{name: 'Ravi'}, {name: 'Vijay'}, {name: 'Sharat'}]);
    });
  });
});
