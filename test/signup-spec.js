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
    expect( error.isPresent() ).toEqual(false);
  });


  // NAME TESTS
  it('should give error for name names', function(){

    // aaand Test!
    var error = element(by.model('last-name-error'));
    expect( error.isPresemt() ).toEqual(true);
  });


  // BIRTHDATE TESTS



  // EMAIL TEST: should produce error
  it('should give error for bad email', function(){
    // bad email
    var email = element(by.model('email'));
    email.sendKeys('bad.email.doe.com');

    // aaand Test!
    var error = element(by.model('email-error'));
    expect( error.isPresemt() ).toEqual(true);
  });



  // PASSWORD TESTS 


})
