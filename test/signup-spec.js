'use strict';

// Tests sign up form's email validation, 
describe('Sign Up Form', function(){

  // Loads page for each test
  beforeEach(function() {
    browser.get('http://localhost:8000');
  });

  // Correct EVERYTHING should work
  it('should pass valid emails', function(){
    // Sends a First Name
    var first =  element(by.model('firstName'));
    first.sendKeys('Jane');

    // Test Last name
    var last =  element(by.model('lastName'));
    var error1 = element(by.id('last-name-error'));
    last.sendKeys('Doe');
    expect( error1.isDisplayed() ).toEqual(false);

    // Test Birthdate
    var date = element(by.model('birthdate'));
    var error2 = element(by.id('birthdate-error'));
    date.sendKeys('11/14/2002');
    expect( error2.isDisplayed() ).toEqual(false);

    // Test Email
    var email = element(by.model('email'));
    var error3 = element(by.id('email-error'));
    email.sendKeys('jane@doe.com');
    expect( error3.isDisplayed() ).toEqual(false);

    // Test Password
    var password = element(by.model('password'));
    var error4 = element(by.id('password-error'));
    password.sendKeys('paSSword123!');
    expect( error4.isDisplayed() ).toEqual(false);

    // // Test Confirm Password
    // var password = element(by.model('confirmpassword'));
    // var error5 = element(by.id('password-error'));
    // password.sendKeys('paSSword123!');
    // expect( error5.isDisplayed() ).toEqual(false);

    var button = element(by.id('sign-me-up-button'));
    button.click();

  });



  // NAME TESTS
  it('should give error for no name', function(){
    var last =  element(by.model('lastName'));
    var error = element(by.id('last-name-error'));

    // NO LAST NAME
    last.sendKeys('BLAH');
    last.clear();
    expect( error.isPresent() ).toEqual(true);
  });


  // BIRTHDATE TESTS
  it('should give error for bad birthday', function(){
    var date = element(by.model('birthdate'));

    var d = new Date();
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();

    // NO BIRTHDAY
    date.sendKeys('BLAH');
    date.clear();
    var error1 = element(by.id('birthdate-error'));
    expect( error1.isPresent() ).toEqual(true);

    // Date is nonsense
    date.clear();
    date.sendKeys('IAMNOTADATE');
    var error2 = element(by.id('birthdate-error'));
    expect( error2.isPresent() ).toEqual(true);

    // Date is too young (1 - by one day)
    date.clear();
    date.sendKeys(month + '/' + (day + 1) + '/' + (year - 13));
    var error3 = element(by.id('birthdate-error'));
    expect( error3.isPresent() ).toEqual(true);

    // Date is too young (2 - by one month)
    date.clear();
    date.sendKeys((month + 1) + '/' + day + '/' + (year - 13));
    var error4 = element(by.id('birthdate-error'));
    expect( error4.isPresent() ).toEqual(true);

    // Date is too young (3 - by one year)
    date.clear();
    date.sendKeys(month + '/' + day + '/' + (year - 12));
    var error5 = element(by.id('birthdate-error'));
    expect( error5.isPresent() ).toEqual(true);
  });
  
  it("shouldn't give error for GOOD birthday", function(){
    var date = element(by.id('birthdate'));

    var d = new Date();
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();

    // Date is GOOD (1 - by one day)
    date.sendKeys(month + '/' + day + '/' + (year - 13));
    var error1 = element(by.id('birthdate-error'));
    expect( error1.isPresent() ).toEqual(false);

    // Date is GOOD (2 - by one month)
    date.clear();
    date.sendKeys((month - 1) + '/' + day + '/' + (year - 13));
    var error2 = element(by.id('birthdate-error'));
    expect( error2.isPresent() ).toEqual(false);

    // Date is GOOD (3 - by one year)
    date.clear();
    date.sendKeys(month + '/' + day + '/' + (year - 14));
    var error3 = element(by.id('birthdate-error'));
    expect( error3.isPresent() ).toEqual(false);
  });



  // EMAIL TEST: should produce error
  it('should give error for bad email', function(){
    var email = element(by.id('email'));

    // NO EMAIL
    email.sendKeys('EMAIL');
    email.clear();
    var error1 = element(by.id('email-error'));
    expect( error1.isPresent() ).toEqual(true);

    // Email without an @ sign
    email.clear();
    email.sendKeys('bad.email.doe.com');
    var error2 = element(by.id('email-error'));
    expect( error2.isPresent() ).toEqual(true);
  });



  // PASSWORD TESTS 


})
