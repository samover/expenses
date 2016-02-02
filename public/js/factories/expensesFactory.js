app.factory('Expenses', function($resource) {
  self.apiUrl = "http://expenses-api.herokuapp.com/api/v1/expenses";
  return $resource(self.apiUrl, {}, {
    query: {method: 'GET'},
    create: {method: 'POST'}
  });
});
