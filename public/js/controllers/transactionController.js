app.controller('TransactionController', ['Expenses', 'Users', function(Expenses, Users) { 
  var self = this,
      transactions = Expenses.get(function(response) {
        self.transactions = response.expenses;
      });

  self.transactions = Expenses.query();

  self.userExpenses = function() {
    self.userId = Users.isAuthenticated() ? Users.getCurrentUser().id : undefined;
    if (self.transactions !== undefined && self.userId) {
      return self.transactions.filter(_filterByUserId);
    }
  }

  self.editExpense;
  self.deleteExpense;

  self.createExpense = function(newExpense) {
    Expenses.create({"id": 34, "user_id": 1, "note": "test"});
  }

  function _filterByUserId(obj) {
    return obj.user_id === self.userId ? true : false;
  }
}]);
