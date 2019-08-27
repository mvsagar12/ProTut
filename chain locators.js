describe('angularjs homepage', function() {
    it('should greet the named user', function() {
      // Load the AngularJS homepage.
      browser.get('http://juliemr.github.io/protractor-demo/');
      //repeater
      element(by.model('first')).sendKeys(3);
      element(by.model('second')).sendKeys(3);
      element(by.id('gobutton')).click();
      browser.sleep(5000);


    });
});