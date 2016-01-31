app.controller('UserController', ['Users', function(Users) {
  var self = this;
  Users.get(function(response) { self.users = response.users; });

  self.loginUser = function(userName) {
    self.currentUser = self.users.filter(function(user) {
      return user.username === userName;
    })[0];

    return self.currentUser !== undefined;
  }

  self.logoutUser = function() {
    self.currentUser = undefined;
  }
}]);
