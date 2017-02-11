'use strict';

/* Services */

var contactServices = angular.module('contactServices', ['ngResource']);
  
 contactServices.factory('Users', ['$resource',
  function($resource){
    return $resource('http://jsonplaceholder.typicode.com/posts', {}, { //return userList
      query: {method:'GET', isArray:true},
	  update:{method:'PUT', params: {userId: '@userId'}},
	  save: {method:'POST'}
    });
  }]);
