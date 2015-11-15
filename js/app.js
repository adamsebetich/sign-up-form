'use strict';

angular.module('FormApp', [])
.controller('FormCtrl', ['$scope', '$validator' function($scope, $validator) { 

  $scope.submitForm = function(form){
  	if(form.$valid) {
  		alert("Payment info has been submitted!");
  	}
  	else {
  		alert("There was an error submitting your payment. Please check that your information is correct.");
  	}
  }
}])
