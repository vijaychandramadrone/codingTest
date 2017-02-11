'use strict';

/* App Module */

var phonecatApp = angular.module('userApp', [
  'ngRoute',
  'userControllers',
  'userServices',
  'userFilters'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	 when('/users', {
        templateUrl: 'html/userList.html',
        controller: 'userListCtrl'
      }).
      otherwise({
        redirectTo: '/users'
      });
  }]);
