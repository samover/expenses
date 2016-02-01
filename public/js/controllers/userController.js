app.controller('UserController', ['Users', function(Users) {
  var self = this;
  Users.get(function(response) { 
    self.users = response.users; 
  });

  self.authenticate = function(userName) {
    self.currentUser = self.users.filter(function(user) {
      return user.username === userName;
    })[0];
    return self.currentUser !== undefined;
  }

  self.unauth = function() {
    self.currentUser = undefined;
  }

  self.isAuthenticated = function() {
    return !!self.currentUser;
  }
}]);
