app.factory('Expenses', function($resource) {
  self.apiUrl = "http://localhost:3000/api/v1/expenses";
  return $resource(self.apiUrl);
});
