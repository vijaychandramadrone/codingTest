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
	 when('/contacts', {
        templateUrl: 'partials/contacts-list.html',
        controller: 'ContactListCtrl'
      }).
      otherwise({
        redirectTo: '/contacts'
      });
  }]);
