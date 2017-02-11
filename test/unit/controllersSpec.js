'use strict';

/* jasmine specs for controllers go here */
describe('user controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('userApp'));
  beforeEach(module('userServices'));

  describe('userListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://jsonplaceholder.typicode.com/posts').
          respond([{
                        "userId": 1,
                        "id": 1,
                        "title": "title1",
                        "body": "body1"
                      },
                      {
                        "userId": 1,
                        "id": 2,
                        "title": "title2",
                        "body": "body2"
                      }]);

      scope = $rootScope.$new();
      ctrl = $controller('userListCtrl', {$scope: scope});
      scope.sortColumn = 'id';
  	  scope.reverseSort = false;
    }));


    it('should create "user" model with data fetched from xhr', function() {
      expect(scope.usersList).toEqualData([]);
      $httpBackend.flush();

      expect(scope.users).toEqualData([{
          "userId": 1,
          "id": 1,
          "title": "title1",
          "body": "body1"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "title2",
          "body": "body2"
        }]);
    });
    
    it('should sort if column do not match', function() {
    	scope.sortColumn = 'id';
    	scope.reverseSort = false;
    	scope.sortData('title');
    	expect(scope.reverseSort).toEqual(false);
    	expect(scope.sortColumn).toEqual('title');

      });
    
    it('should reverse sort if column match', function() {
    	scope.sortData('id');
    	expect(scope.reverseSort).toEqual(true);
      });
    
    it('should display uparrow class by default', function() {
    	//scope.displayIcon('id');
    	expect(scope.displayIcon('id')).toEqual('arrow-up');
      });
    
    it('should change icon to down arrow when clicked', function() {
    	scope.reverseSort = true;
    	expect(scope.displayIcon('id')).toEqual('arrow-down');
      });
    
    it('should return nothing when clicked out side headers', function() {
    	//scope.displayIcon('1234');
    	expect(scope.displayIcon('1234')).toEqual('');
      });
    
  });
});
