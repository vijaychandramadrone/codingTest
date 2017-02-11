'use strict';

/* Controllers */

var contactControllers = angular.module('contactControllers', []);


contactControllers.controller('ContactListCtrl', ['$scope', 'Contacts',
  function($scope, Contacts) {
    $scope.contacts = Contacts.query();
	$scope.updateData = function(){
	 console.log("Code for posting or update with Contacts.update({}})");
  }
  }]);
