'use strict';

var FormApp = angular.module('FormApp', []);

FormApp.controller('FormCtrl', ['$scope', '$http', function($scope, $http) { 

  $scope.submitForm = function(form){
  	if(form.$valid) {
  		console.log('form is valid, YAY!');
  	}
  	else {
  		console.log('form is invalid, BOOO!');
  	}
  }

  $scope.passwordConfirmed = function() {
  	if($scope.password === $scope.confirmpassword) {
  		$scope.signUpForm.confirmpassword.$setValidity('$invalid', true);
  		return true;
  	}
  	else {
  		$scope.signUpForm.confirmpassword.$setValidity('$invalid', false);
  		return false;
  	}
  }
  
  $scope.birthdateInput = function(birthdate){
    var todaysDate = Date.parse('11/15/2015');
    var userBirthdate = Date.parse(birthdate);
    var ageOfUser = todaysDate - userBirthdate; 
    var convertToYears = ageOfUser / 31536000000; 
    if(convertToYears >= 13) {
      return true;
    } else {
      return false; 
    }
  }
}])


.controller('ctrl', function($scope){
  $scope.pass="";
  $scope.v=function(){
    return test($scope.pass);
  };
});

function test(pass){
  if(pass == null)
    return -1;
  var secure = 0;
  if(pass.length<6)
    return 0;
  if( /[0-9]/.test( pass ) )
    secure++;
  if( /[a-z]/.test( pass ) )
    secure++;
  if( /[A-Z]/.test( pass ) )
    secure++;
  if( /[^A-Z-0-9]/i.test( pass ) )
    secure++;
  return secure;
}

