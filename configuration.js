exports.config = 
  {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['chain locators.js'],
      capabilities: {
      browserName: 'chrome'
    },
  };