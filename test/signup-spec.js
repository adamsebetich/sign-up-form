'use strict';

// Tests sign up form's email validation, 
describe('Sign Up Form', function(){

  // NAME TESTS

  // BIRTHDATE TESTS

  // EMAIL TESTS
  // Correct EMAILS should work
  it('should pass valid emails', function(){
      browser.get('http://localhost:8000');

      expect( browser.getTitle() ).toEqual('Watch List');

      browser.getTitle().then(function(response){
          console.log(response);
      });

  });
  // Incorrect EMAILS shouldn't work
  it('should fail invalid emails', function(){
    browser.get('http://localhost:8000');

    var emailInput = element(by.model('email'));
    searchBar.sendKeys('bad.email.gmail.com');

    var button = element(by.id('submit-button'));
    button.click();

    var modalBody = element(by.css('.modal-body'));
    expect( modalBody.isPresent() ).toEqual(true);

  });



  // PASSWORD TESTS 


})
