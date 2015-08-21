describe('Github Profile finder', function() {
  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('Guillaume Github user search');
  });

  it('finds profiles', function() {
    browser.get('http://localhost:8080');

    element(by.model('searchCtrl.searchTerm')).sendKeys('GBouffard');
    element(by.className('btn')).click();

    expect(element(by.binding('user.login')).getText()).toEqual('GBouffard');
  });
});


