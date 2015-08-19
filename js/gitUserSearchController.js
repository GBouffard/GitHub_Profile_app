githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

var self = this;
var searchResource = $resource('https://api.github.com/search/users?access_token=47c9e10c94239841baa1a65a44a0f972813c257d');

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );
  };
}]);
