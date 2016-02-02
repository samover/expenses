describe('TransactionController', function() {
  var ctrl, transactions;

  beforeEach( module( 'ExpensesApp' ));

  beforeEach( inject( function( $controller ){
    ctrl = $controller( 'TransactionController' );
  }));

  describe('when user is logged in', function() {
    
   var userExpenses = [ { "id": 1, "user_id": 1, }, { "id": 3, "user_id": 1, } ];

    it('shows the user\'s expenses', function() {
      ctrl.userId = 1;
      ctrl.transactions = [
          { "id": 1, "user_id": 1, },
          { "id": 2, "user_id": 2, },
          { "id": 3, "user_id": 1, }
      ];
      expect(ctrl.userExpenses()).toEqual(userExpenses);
    });
  });
});
