describe('TransactionController', function() {
  var ctrl, transactions;

  beforeEach( module( 'ExpensesApp' ));

  beforeEach( inject( function( $controller ){
    ctrl = $controller( 'TransactionController' );
  }));

  describe('toggleForm', function() {
    it('toggles the boolean value of showForm', function() {
      ctrl.showForm = false;
      ctrl.toggleForm();
      expect(ctrl.showForm).toBe(true);
    }); 
  });
});
