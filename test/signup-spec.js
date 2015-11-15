'use strict';

// Tests sign up form's email validation, 
describe('Sign Up Form', function(){

    // Correct emails should work
    it('should pass valid emails', function(){
        browser.get('http://localhost:8000/#/watchlist');

        expect( browser.getTitle() ).toEqual('Watch List');

        browser.getTitle().then(function(response){
            console.log(response);
        });

    });

    // Incorrect emails shouldn't work
    it('should fail invalid emails', function(){
      browser.get('http://localhost:8000/#/watchlist');

      var searchBar = element(by.model('searchQuery'));
      searchBar.sendKeys('shawshank');

      browser.pause();

      var button = element(by.id('searchButton'));
      button.click();

      var modalBody = element(by.css('.modal-body'));
      expect( modalBody.isPresent() ).toEqual(true);



    });

})
