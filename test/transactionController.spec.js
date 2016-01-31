describe('TransactionController', function() {
  var ctrl, transactions;

  beforeEach( module( 'Expenses' ));

  beforeEach( inject( function( $controller ){
    ctrl = $controller( 'TransactionController' );
  }));

  it('Initialises with an empty transaction and daterange', function() {
    expect(ctrl.dateRange).toBeUndefined();
    expect(ctrl.transactions).toBeUndefined();
  });
});
