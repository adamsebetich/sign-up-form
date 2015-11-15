'use strict';

// Tests sign up form's email validation, 
describe('Sign Up Form', function(){

  // Loads page for each test
  beforeEach(function() {
    browser.get('http://localhost:8000');
  });


  // NAME TESTS

  // BIRTHDATE TESTS



  // EMAIL TESTS
  // Correct EMAILS should work
  it('should pass valid emails', function(){
    var first =  element(by.model('firstName'));
    searchBar.sendKeys('Jane');

    var last =  element(by.model('lastName'));
    searchBar.sendKeys('Doe');

    // good email
    var email = element(by.model('email'));
    searchBar.sendKeys('jane@doe.com');

    var button = element(by.id('sign-me-up-button'));
    button.click();

    // does it fail?
    var error = element(by.model('email-error'));
    expect( error.isDisplayed() ).toEqual(false);
  });

  // Incorrect EMAILS shouldn't work
  it('should fail invalid emails', function(){
    var first =  element(by.model('firstName'));
    searchBar.sendKeys('Jane');

    var last =  element(by.model('lastName'));
    searchBar.sendKeys('Doe');

    // bad email
    var email = element(by.model('email'));
    searchBar.sendKeys('bad.email.doe.com');

    var button = element(by.id('sign-me-up-button'));
    button.click();

    // does it fail?
    var error = element(by.model('email-error'));
    expect( error.isDisplayed() ).toEqual(true);
  });



  // PASSWORD TESTS 


})
