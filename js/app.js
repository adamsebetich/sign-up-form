'use strict';

angular.module('FormApp', [])
.controller('FormCtrl', ['$scope', function($scope) { 

  $scope.submitForm = function(form){
  	if(form.$valid) {
  		alert("Payment info has been submitted!");
  	}
  	else {
  		alert("There was an error submitting your payment. Please check that your information is correct.");
  	}
  }
}])
