describe('TransactionController', function() {
  var ctrl, transactions;

  beforeEach( module( 'Expenses' ));

  beforeEach( inject( function( $controller ){
    ctrl = $controller( 'TransactionController' );

  }));

  it('Initialises with an empty transaction and daterange', function() {
    expect(ctrl.currentUser).toBeUndefined();
    expect(ctrl.dateRange).toBeUndefined();
    expect(ctrl.transactions).toBeUndefined();
  });

  describe('when user is logged in', function() {
    
   var expenses = [
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
      }
    ];

    it('shows the user\'s expenses', function() {
      ctrl.currentUser = 1;
      expect(ctrl.userExpenses()).toEqual(expenses);
    });
  });
});
