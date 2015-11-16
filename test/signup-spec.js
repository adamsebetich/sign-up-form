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
    var error1 = element(by.model('last-name-error'));
    last.sendKeys('Doe');
    expect( error1.isPresent() ).toEqual(false);

    // Test Birthdate
    var date = element(by.model('birthdate'));
    var error2 = element(by.model('birthdate-error'));
    date.sendKeys('11/14/2002');
    expect( error2.isPresent() ).toEqual(false);

    // Test Email
    var email = element(by.model('email'));
    var error3 = element(by.model('email-error'));
    email.sendKeys('jane@doe.com');
    expect( error3.isPresent() ).toEqual(false);

    // Test Password
    var password = element(by.model('password'));
    var error4 = element(by.model('password-error'));
    password.sendKeys('paSSword123!');
    expect( error4.isPresent() ).toEqual(false);

    // // Test Confirm Password
    // var password = element(by.model('confirmpassword'));
    // var error5 = element(by.model('password-error'));
    // password.sendKeys('paSSword123!');
    // expect( error5.isPresent() ).toEqual(false);


    var button = element(by.id('sign-me-up-button'));
    button.click();

  });



  // // NAME TESTS
  // it('should give error for no name', function(){
  //   var last =  element(by.model('lastName'));
  //   var error = element(by.model('last-name-error'));

  //   // NO LAST NAME
  //   last.sendKeys('BLAH');
  //   last.clear();
  //   expect( error.isPresemt() ).toEqual(true);
  // });


  // BIRTHDATE TESTS
  it('should give error for bad birthday', function(){
    // Test Birthdate
    var date = element(by.model('birthdate'));
    var error2 = element(by.model('birthdate-error'));
    date.sendKeys('11/17/2002');
    expect( error2.isPresent() ).toEqual(true);

    // var date = element(by.model('birthdate'));

    // var d = new Date();
    // var month = d.getMonth();
    // var day = d.getDate();
    // var year = d.getFullYear();

    // // // NO BIRTHDAY
    // // date.sendKeys('BLAH');
    // // date.clear();
    // // var error1 = element(by.model('birthdate-error'));
    // // expect( error1.isPresemt() ).toEqual(true);

    // // // // Date is nonsense
    // // // date.clear();
    // // date.sendKeys('IAMNOTADATE');
    // // var error2 = element(by.model('birthdate-error'));
    // // expect( error2.isPresemt() ).toEqual(true);

    // // Date is too young (1 - by one day)
    // date.clear();
    // date.sendKeys(month + '/' + (day + 1) + '/' + (year - 13));
    // var error3 = element(by.model('birthdate-error'));
    // expect( error3.isPresemt() ).toEqual(true);

    // // Date is too young (2 - by one month)
    // date.clear();
    // date.sendKeys((month + 1) + '/' + day + '/' + (year - 13));
    // var error4 = element(by.model('birthdate-error'));
    // expect( error4.isPresemt() ).toEqual(true);

    // // Date is too young (3 - by one year)
    // date.clear();
    // date.sendKeys(month + '/' + day + '/' + (year - 12));
    // var error5 = element(by.model('birthdate-error'));
    // expect( error5.isPresemt() ).toEqual(true);
  });
  
  it("shouldn't give error for GOOD birthday", function(){
    var date = element(by.model('birthdate'));

    var d = new Date();
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();

    // // Date is GOOD (1 - by one day)
    // date.sendKeys(month + '/' + day + '/' + (year - 13));
    // var error1 = element(by.model('birthdate-error'));
    // expect( error1.isPresemt() ).toEqual(false);

    // // Date is GOOD (2 - by one month)
    // date.clear();
    date.sendKeys((month - 1) + '/' + day + '/' + (year - 13));
    var error2 = element(by.model('birthdate-error'));
    expect( error2.isPresemt() ).toEqual(false);

    // Date is GOOD (3 - by one year)
    date.clear();
    date.sendKeys(month + '/' + day + '/' + (year - 14));
    var error3 = element(by.model('birthdate-error'));
    expect( error3.isPresemt() ).toEqual(false);
  });



  // EMAIL TEST: should produce error
  it('should give error for bad email', function(){
    var email = element(by.model('email'));

    // // NO EMAIL
    // email.sendKeys('');
    // var error1 = element(by.model('email-error'));
    // expect( error1.isPresemt() ).toEqual(true);

    // // Email without an @ sign
    // email.clear();
    email.sendKeys('bad.email.doe.com');
    var error2 = element(by.model('email-error'));
    expect( error2.isPresemt() ).toEqual(true);
  });



  // PASSWORD TESTS 


})
