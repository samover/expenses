describe('UserController', function() {
  var ctrl;

  beforeEach( module( 'ExpensesApp' ));

  beforeEach( inject( function( $controller ){
    ctrl = $controller( 'UserController' );
  }));
});
