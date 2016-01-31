app.factory('Users', function($resource) {
  self.apiUrl = "http://localhost:3000/api/v1/users";
  return $resource(self.apiUrl);
});
