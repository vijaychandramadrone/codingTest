'use strict';

/* Services */

var contactServices = angular.module('contactServices', ['ngResource']);
  
 contactServices.factory('Contacts', ['$resource',
  function($resource){
    return $resource('contacts/contacts.json', {}, { //return $resource('phones/:contactId'
      query: {method:'GET', isArray:true},
	  update:{method:'PUT', params: {contactId: '@contactId'}},
	  save: {method:'POST'}
    });
  }]);
