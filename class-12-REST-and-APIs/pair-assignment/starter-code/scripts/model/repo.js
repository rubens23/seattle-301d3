(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // TODO: How would you like to fetch your repos? Someone say AJAX!?
    //  Don't forget to call the callback!
    $.ajax({
      url: 'https://api.github.com/users/rubens23/repos' +
      '?per_page=3' +
      '&sort=updated',
      type: 'GET',
      headers: {
        'Authorization': 'token ' + githubToken
      },
      success: function(data) {
        callback();
        console.log(data);
      }
    })
  };

  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
