app.controller('TransactionController', ['Expenses', 'Users', function(Expenses, Users) { 
  var self = this,
      currentUser = Users.getCurrentUser(),
      transactions = Expenses.get(function(response) {
        self.transactions = response.expenses;
      });

  self.userExpenses = function() {
    if (self.transactions !== undefined) {
      return self.transactions.filter(filterByUserId);
    }
  }

  function filterByUserId(obj) {
    return obj.user_id === self.currentUser.id ? true : false;
  }
}]);
