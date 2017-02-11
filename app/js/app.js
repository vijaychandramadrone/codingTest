'use strict';

/* App Module */

var phonecatApp = angular.module('contactApp', [
  'ngRoute',
  'contactControllers',
  'contactServices',
  'contactFilters'
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
