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
  var myApp = angular.module('myApp',[]);

  function MyCtrl($scope) {}
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

