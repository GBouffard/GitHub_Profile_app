describe('factory: Search', function() {

  var search;

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

  beforeEach(module('GitUserSearch'));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .when("GET", "https://api.github.com/search/users?q=hello")
      .respond(
        { items: items }
      );
  }));

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

  it('returns search results', function() {
    search.query('hello')
      .then(function(response) {
        expect(response.data).toEqual(items)
      })  
  });
});