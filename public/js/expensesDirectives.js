app.directive('expensesHeader', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/expenses-header.html'
  }
});

app.directive('expensesAside', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/expenses-aside.html'
  }
});

app.directive('expensesArticle', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/expenses-article.html'
  }
});

app.directive('expensesFooter', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/expenses-footer.html'
  }
});
