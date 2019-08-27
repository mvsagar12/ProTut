describe('angularjs homepage', function() {
    it('should greet the named user', function() {
      // Load the AngularJS homepage.
      browser.get('http://www.angularjs.org');
      browser.get('http://juliemr.github.io/protractor-demo/')
      //expect(greeting.getText()).toEqual('Hello Julie!');
    });
});