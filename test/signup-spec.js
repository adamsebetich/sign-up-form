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
    // aaand Test Last Name!
    var error = element(by.model('last-name-error'));
    expect( error.isPresent() ).toEqual(false);

    var date = element(by.model('birthdate'));
    last.sendKeys('11/14/2002');
    // aaand Test Birthdate!
    var error = element(by.model('birthdate-error'));
    expect( error.isPresent() ).toEqual(false);

    var email = element(by.model('email'));
    email.sendKeys('jane@doe.com');
    // aaand Test Email!
    var error = element(by.model('email-error'));
    expect( error.isPresent() ).toEqual(false);

    var password = element(by.model('password'));
    email.sendKeys('paSSword123!');
    // aaand Test Password!
    var error = element(by.model('password-error'));
    expect( error.isPresent() ).toEqual(false);


    var button = element(by.id('sign-me-up-button'));
    button.click();

  });



  // NAME TESTS
  it('should give error for name', function(){
    // NO LAST NAME
    // aaand Test!
    var error = element(by.model('last-name-error'));
    expect( error.isPresemt() ).toEqual(true);
  });


  // BIRTHDATE TESTS
  it('should give error bad birthday', function(){
    var month = todaysDate.getMonth();
    var day = todaysDate.getDate();
    var year = todaysDate.getFullYear();

    // NO BIRTHDAY
    // aaand Test!
    var error = element(by.model('birthdate-error'));
    expect( error.isPresemt() ).toEqual(true);

    // Date is nonsense
    var date = element(by.model('birthdate'));
    date.sendKeys('IAMNOTADATE');
    // aaand Test!
    var error = element(by.model('birthdate-error'));
    expect( error.isPresemt() ).toEqual(true);

    // Date is too young (1 - by one day)
    var date = element(by.model('birthdate'));
    date.sendKeys(month + '/' + (day + 1) + '/' + (year - 13));
    // aaand Test!
    var error = element(by.model('birthdate-error'));
    expect( error.isPresemt() ).toEqual(true);

    // Date is too young (2 - by one month)
    var date = element(by.model('birthdate'));
    date.sendKeys((month + 1) + '/' + day + '/' + (year - 13));
    // aaand Test!
    var error = element(by.model('birthdate-error'));
    expect( error.isPresemt() ).toEqual(true);

    // Date is too young (3 - by one year)
    var date = element(by.model('birthdate'));
    date.sendKeys(month + '/' + day + '/' + (year - 12));
    // aaand Test!
    var error = element(by.model('birthdate-error'));
    expect( error.isPresemt() ).toEqual(true);

     // Date is GOOD (1 - by one day)
    var date = element(by.model('birthdate'));
    date.sendKeys(month + '/' + day + '/' + (year - 13));
    // aaand Test!
    var error = element(by.model('birthdate-error'));
    expect( error.isPresemt() ).toEqual(false);

    // Date is GOOD (2 - by one month)
    var date = element(by.model('birthdate'));
    date.sendKeys((month - 1) + '/' + day + '/' + (year - 13));
    // aaand Test!
    var error = element(by.model('birthdate-error'));
    expect( error.isPresemt() ).toEqual(false);

    // Date is GOOD (3 - by one year)
    var date = element(by.model('birthdate'));
    date.sendKeys(month + '/' + day + '/' + (year - 14));
    // aaand Test!
    var error = element(by.model('birthdate-error'));
    expect( error.isPresemt() ).toEqual(false);
  });



  // EMAIL TEST: should produce error
  it('should give error for bad email', function(){
    // NO EMAIL
    // aaand Test!
    var error = element(by.model('email-error'));
    expect( error.isPresemt() ).toEqual(true);

    // Email without an @ sign
    var email = element(by.model('email'));
    email.sendKeys('bad.email.doe.com');
    // aaand Test!
    var error = element(by.model('email-error'));
    expect( error.isPresemt() ).toEqual(true);
  });



  // PASSWORD TESTS 


})
