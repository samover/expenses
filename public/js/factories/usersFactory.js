app.factory('Users', ['$http', '$q', '$window', function($http, $q, $window) {
  var currentUser;

  function authenticate(userName) {
    var deferred = $q.defer();

    $http.get('http://localhost:3000/api/v1/users')
      .then(function(res) {
        users = res.data.users;
        currentUser = users.filter(function(user) {
          return user.username === userName;
        })[0];
        $window.sessionStorage["currentUser"] = JSON.stringify(currentUser);
        deferred.resolve(currentUser);
    }, function(error) {
      deferred.reject(error);
    });

    return deferred.promise;
  }

  function unauth() {
    $window.sessionStorage["currentUser"] = null;
  }

  function isAuthenticated() {
    return !!getCurrentUser();
  }

  function getCurrentUser() {
    return JSON.parse($window.sessionStorage["currentUser"]);
  }

  return {
    authenticate: authenticate,
    getCurrentUser: getCurrentUser,
    unauth: unauth,
    isAuthenticated: isAuthenticated
  }
}]);
