app.factory('Categories', function($resource) {
  self.apiUrl = 'http://localhost:3000/api/v1/categories/:Id';
  return $resource(self.apiUrl, {Id: '@id'}, {
    query: { method: 'GET' },
    create: { method: 'POST' },
    destroy: { method: 'DELETE' }
  });
});
