'use strict';

/* Controllers */

var contactControllers = angular.module('contactControllers', []);


contactControllers.controller('userListCtrl', ['$scope', 'Users',
  function($scope, Users) {
	$scope.usersList = Users.query();
	$scope.usersList.$promise.then(function (res) {
	    $scope.users = res;
	});
	
	$scope.sortColumn = 'id';
	$scope.reverseSort = false;
	
	$scope.sortData = function(colname){
		$scope.reverseSort = ($scope.sortColumn === colname) ? !$scope.reverseSort : false;
		$scope.sortColumn = colname;
	}
	
	$scope.displayIcon = function (colName) {
		if($scope.sortColumn === colName){
			return $scope.reverseSort ? 'arrow-down': 'arrow-up'
		}
		return '';
	}
  }]);
