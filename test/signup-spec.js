'use strict';

// Tests sign up form's email validation, 
describe('Sign Up Form', function(){

  // Loads page for each test
  beforeEach(function() {
    browser.get('http://localhost:8000');
  });

  // Correct EVERYTHING should work
  it('should pass valid emails', function(){
    var first =  element(by.model('firstName'));
    first.sendKeys('Jane');

    var last =  element(by.model('lastName'));
    last.sendKeys('Doe');

    var date = element(by.model('birthdate'));
    last.sendKeys('11/14/2002');

    var email = element(by.model('email'));
    email.sendKeys('jane@doe.com');

    var button = element(by.id('sign-me-up-button'));
    button.click();

    var password = element(by.model('password'));
    email.sendKeys('paSSword123!');

    // aaand Test!
    var error = element(by.model('email-error'));
    expect( error.isDisplayed() ).toEqual(false);
  });


  // NAME TESTS

  // BIRTHDATE TESTS



  // EMAIL TESTS
  // Incorrect EMAILS shouldn't work
  // it('should fail invalid emails', function(){
  //   var first =  element(by.model('firstName'));
  //   first.sendKeys('Jane');

  //   var last =  element(by.model('lastName'));
  //   last.sendKeys('Doe');

  //   var date = element(by.model('birthdate'));
  //   last.sendKeys('11/14/2002');

  //   // bad email
  //   var email = element(by.model('email'));
  //   email.sendKeys('bad.email.doe.com');

  //   var password = element(by.model('password'));
  //   email.sendKeys('paSSword123!');

  //   var button = element(by.id('sign-me-up-button'));
  //   button.click();

  //   // aaand Test!
  //   var error = element(by.model('email-error'));
  //   expect( error.isDisplayed() ).toEqual(true);
  // });



  // PASSWORD TESTS 


})
