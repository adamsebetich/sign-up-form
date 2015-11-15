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

      expect( browser.getTitle() ).toEqual('Watch List');

      browser.getTitle().then(function(response){
          console.log(response);
      });

  });
  // Incorrect EMAILS shouldn't work
  it('should fail invalid emails', function(){

    var first =  element(by.model('firstName'));
    searchBar.sendKeys('Jane');

    var last =  element(by.model('lastName'));
    searchBar.sendKeys('Doe');

    var emailInput = element(by.model('email'));
    searchBar.sendKeys('bad.email.doe.com');

    var button = element(by.id('sign-me-up-button'));
    button.click();

    // does it fail?
    var error = element(by.css('.modal-body'));
    expect( modalBody.isPresent() ).toEqual(true);

  });



  // PASSWORD TESTS 


})
