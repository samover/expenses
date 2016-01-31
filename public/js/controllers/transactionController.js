app.controller('TransactionController', [function() {
  var self = this;
  var transactions = {
    "expenses": [
    {
      "id": 1,
      "user_id": 1,
      "amount": 14,
      "note": "Ipsa eos qui id officia in.",
      "category_id": 4,
      "created_at": "2016-01-29T16:46:35.710Z",
      "updated_at": "2016-01-29T16:46:35.710Z"
    },
    {
      "id": 2,
      "user_id": 1,
      "amount": 15,
      "note": "Quis eum voluptatum voluptate.",
      "category_id": 3,
      "created_at": "2016-01-29T16:46:35.718Z",
      "updated_at": "2016-01-29T16:46:35.718Z"
    },
    {
      "id": 3,
      "user_id": 1,
      "amount": 19,
      "note": "Ducimus similique nostrum totam nihil aut.",
      "category_id": 3,
      "created_at": "2016-01-29T16:46:35.723Z",
      "updated_at": "2016-01-29T16:46:35.723Z"
    },
    {
      "id": 4,
      "user_id": 2,
      "amount": 19,
      "note": "Arma virumque cano",
      "category_id": 3,
      "created_at": "2016-01-29T16:46:35.723Z",
      "updated_at": "2016-01-29T16:46:35.723Z"
    }
    ]};

  self.userExpenses = function() {
    return transactions.expenses.filter(filterByUserId);
  }

  function filterByUserId(obj) {
    return obj.user_id === self.currentUser ? true : false;
  }
}]);
