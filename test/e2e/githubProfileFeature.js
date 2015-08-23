describe('Github Profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'))
  var searchButton = element(by.className('btn'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Guillaume Github user search');
  });

  it('finds profiles', function() {
    searchBox.sendKeys('GBouffard');
    searchButton.click();
    expect(element(by.binding('user.login')).getText()).toEqual('GBouffard');
  });

  it('finds the last GBouff (even if not Guillaume)', function() {
    searchBox.sendKeys('GBouff');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.last().getText()).toMatch(/GBouff.*/);
  });
});
