describe('UserController', function() {
  var ctrl;

  beforeEach( module( 'ExpensesApp' ));

  beforeEach( inject( function( $controller ){
    ctrl = $controller( 'UserController' );

    ctrl.users = [
        { "id": 1, "username": "Terry", },
        { "id": 2, "username": "Angel", },
      ]
  }));

  it('initializes with an empty user', function() {
    expect(ctrl.currentUser).toBeUndefined();
  });

  describe('Logging in', function() {
    it('returns true when logging in with existing user', function() {
        expect(ctrl.loginUser('Terry')).toBe(true);
    });

    it('returns false when the user does not exist', function() {
      expect(ctrl.loginUser('Ellen')).toBe(false);
    });

    it('currentUser is an object with the user data', function() {
      ctrl.loginUser('Terry');
      expect(ctrl.currentUser).toEqual(ctrl.users[0]);
    });
  });

  describe('Logging out', function() {
    it('destroys the current user', function() {
      ctrl.loginUser('Terry');
      ctrl.logoutUser('Terry');
      expect(ctrl.currentUser).toBeUndefined();
    });
  });
});
