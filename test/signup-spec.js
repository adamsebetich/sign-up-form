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

    // Test Last name
    var last =  element(by.model('lastName'));
    var error1 = element(by.model('last-name-error'));
    last.sendKeys('Doe');
    expect( error.isPresent() ).toEqual(false);

    // Test Birthdate
    var date = element(by.model('birthdate'));
    var error2 = element(by.model('birthdate-error'));
    last.sendKeys('11/14/2002');
    expect( error.isPresent() ).toEqual(false);

    // Test Email
    var email = element(by.model('email'));
    var error3 = element(by.model('email-error'));
    email.sendKeys('jane@doe.com');
    expect( error.isPresent() ).toEqual(false);

    // Test Password
    var password = element(by.model('password'));
    var error4 = element(by.model('password-error'));
    email.sendKeys('paSSword123!');
    expect( error.isPresent() ).toEqual(false);


    var button = element(by.id('sign-me-up-button'));
    button.click();

  });



  // NAME TESTS
  it('should give error for no name', function(){
    var last =  element(by.model('lastName'));
    var error = element(by.model('last-name-error'));

    // NO LAST NAME
    last.sendKeys('');
    expect( error.isPresemt() ).toEqual(true);
  });


  // BIRTHDATE TESTS
  it('should give error for bad birthday', function(){
    var date = element(by.model('birthdate'));
    var error = element(by.model('birthdate-error'));

    var month = todaysDate.getMonth();
    var day = todaysDate.getDate();
    var year = todaysDate.getFullYear();

    // NO BIRTHDAY
    date.sendKeys('');
    expect( error.isPresemt() ).toEqual(true);

    // Date is nonsense
    date.clear();
    date.sendKeys('IAMNOTADATE');
    expect( error.isPresemt() ).toEqual(true);

    // Date is too young (1 - by one day)
    date.clear();
    date.sendKeys(month + '/' + (day + 1) + '/' + (year - 13));
    expect( error.isPresemt() ).toEqual(true);

    // Date is too young (2 - by one month)
    date.clear();
    date.sendKeys((month + 1) + '/' + day + '/' + (year - 13));
    expect( error.isPresemt() ).toEqual(true);

    // Date is too young (3 - by one year)
    date.clear();
    date.sendKeys(month + '/' + day + '/' + (year - 12));
    expect( error.isPresemt() ).toEqual(true);
  });
  
  it("shouldn't give error for GOOD birthday", function(){
    var date = element(by.model('birthdate'));
    var error = element(by.model('birthdate-error'));

    var month = todaysDate.getMonth();
    var day = todaysDate.getDate();
    var year = todaysDate.getFullYear();

    // Date is GOOD (1 - by one day)
    date.sendKeys(month + '/' + day + '/' + (year - 13));
    expect( error.isPresemt() ).toEqual(false);

    // Date is GOOD (2 - by one month)
    date.clear();
    date.sendKeys((month - 1) + '/' + day + '/' + (year - 13));
    expect( error.isPresemt() ).toEqual(false);

    // Date is GOOD (3 - by one year)
    date.clear();
    date.sendKeys(month + '/' + day + '/' + (year - 14));
    expect( error.isPresemt() ).toEqual(false);
  });



  // EMAIL TEST: should produce error
  it('should give error for bad email', function(){
    var email = element(by.model('email'));
    var error = element(by.model('email-error'));

    // NO EMAIL
    email.sendKeys('');
    expect( error.isPresemt() ).toEqual(true);

    // Email without an @ sign
    email.clear();
    email.sendKeys('bad.email.doe.com');
    expect( error.isPresemt() ).toEqual(true);
  });



  // PASSWORD TESTS 


})
