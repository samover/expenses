app.controller('TransactionController', ['Expenses', 'Users', 'Categories', 'daterangepicker', function(Expenses, Users, Categories, daterangepicker) { 
  var self = this;

  self.user = Users;

  _updateUserExpenses();
  _loadCategories();

  self.showForm = false;

  self.toggleForm = function() {
    self.showForm = !self.showForm;
  }

  self.destroyExpense = function(expenseId) {
    Expenses.destroy({'Id': expenseId}).$promise.then(function() {
      _updateUserExpenses();
    });
  }

  self.createExpense = function(newExpense) {
    newExpense['user_id'] = Users.getCurrentUser().id;
    newExpense['category_id'] = newExpense['category_id'] || 1;
    Expenses.create(newExpense).$promise.then(function() {
      _updateUserExpenses();
      self.toggleForm(); });
  }

  self.unauth = function() {
    Users.unauth();
    self.userExpenses = [];
  }

  self.authenticate = function(userName) {
    Users.authenticate(userName).then(function() {
      _updateUserExpenses();
    });
  }

  self.categoryName = function(id) {
    var test = self.categories.filter(function(category) {
      return category.id === id;
    })[0];
    return test.name;
  }

  self.categoryTotal = function(id) {
    if(self.userExpenses) {
      return total( self.userExpenses.filter(function(obj) {
        return obj.category_id === id;
      }) );
    } 
  }

  function _filterByUserId(obj) {
    return obj.user_id === self.userId ? true : false;
  }

  function _updateUserExpenses() {
    self.transactions = Expenses.query().$promise.then(function(res) {
      self.userId = Users.getCurrentUser().id;
      self.userExpenses = res.expenses.filter(_filterByUserId);
      self.total = _expensesTotal();
      console.log(self.total);
    });
  }

  function _expensesTotal() {
    return total(self.userExpenses);
  }

  function total(list) {
    return list.map(function(obj) { return obj.amount; })
      .reduce(function(a,b) { return a + b; });
  }

  function _loadCategories() {
    Categories.query().$promise.then(function(res) {
      self.categories = res.categories;
    });
  }
}]);
