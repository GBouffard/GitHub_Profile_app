githubUserSearch.controller('GitUserSearchController', [function() {

var self = this;

  self.doSearch = function() {
    self.searchResult = {
      "items": [
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
      ]
    };
  };
}]);
