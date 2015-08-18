describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {
  var items = [
    {
      "login": "GBouffard",
      "avatar_url": "https://avatars0.githubusercontent.com/u/10553003?v=3",
      "html_url": "https://github.com/GBouffard"
    }, 
    {
      "login": "PaulWallis42",
      "avatar_url": "https://avatars3.githubusercontent.com/u/10485555?v=3",
      "html_url": "https://github.com/PaulWallis42"
    }
  ];

    it('displays search results', function() {
      ctrl.doSearch();
      expect(ctrl.searchResult.items).toEqual(items);
    });
  });
});