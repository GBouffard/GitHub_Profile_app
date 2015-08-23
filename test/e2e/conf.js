exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['githubProfileFeature.js'],
  capabilities: {
    browserName: 'chrome'
  }
  // This works but we are getting back to testing with one browser
  // multiCapabilities: [{
  //   browserName: 'firefox'
  // }, {
  //   browserName: 'chrome'
  // }]
}