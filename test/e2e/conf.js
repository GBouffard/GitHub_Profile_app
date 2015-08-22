exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['githubProfileFeature.js'],
  directConnect: false,
  firefoxPath: null,
  baseUrl: "http://localhost:8080",
  capabilities: {
    browserName: 'firefox'
  }
}