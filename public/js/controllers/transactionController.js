app.controller('TransactionController', ['Expenses', function(Expenses) { 
  var self = this;
  var transactions = Expenses.get(function(response) {
    self.transactions = response.expenses;
  });

  self.userExpenses = function() {
    if (self.transactions !== undefined) {
      return self.transactions.filter(filterByUserId);
    }
  }

  function filterByUserId(obj) {
    return obj.user_id === self.currentUser ? true : false;
  }
}]);
