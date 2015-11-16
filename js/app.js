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

  //Compares user's birthday to today's date and checks if user is 13+ 
  $scope.birthdateInput = function(birthdate){
  	var todaysDate = new Date(); 
  	var usersBirthdate = new Date(birthdate);
  	var dayToday = todaysDate.getDate();
  	var userDay = usersBirthdate.getDate();
  	var monthToday = todaysDate.getMonth();
  	var userMonth = usersBirthdate.getMonth();
  	var yearToday = todaysDate.getFullYear();
  	var userYear = usersBirthdate.getFullYear();
  	//If user's birthdate year is over 13 years before today's year, return true
  	if(yearToday - userYear > 13) { 
  		return true;
  	}
  	//If user's birthdate year is 2002 and the user's birthday month has already 
  	//passed in this calendar year, return true. 
  	if(userYear == 2002 && monthToday > userMonth) {
  		return true; 
  	}
  	//If user's birthdate year is 2002 and the month of the user's bday is the same
  	//as this year's current month and the the user's day of birth already passed or is 
  	//today in this current year, return true
  	if(userYear == 2002 && userMonth == monthToday && dayToday >= userDay) {
  		return true; 
  	}
  	//otherwise the user is under 13, return false 
  	return false;
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

