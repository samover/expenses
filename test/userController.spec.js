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

  describe('Authentication', function() {
    it('returns true when authenticatingl with existing user', function() {
        expect(ctrl.authenticate('Terry')).toBe(true);
    });

    it('returns false when the user does not exist', function() {
      expect(ctrl.authenticate('Ellen')).toBe(false);
    });

    it('currentUser is an object with the user data', function() {
      ctrl.authenticate('Terry');
      expect(ctrl.currentUser).toEqual(ctrl.users[0]);
    });

    it('a user is authenticated upon login', function() {
      ctrl.authenticate('Terry');
      expect(ctrl.isAuthenticated()).toBe(true);
    });
  });

  describe('Logging out', function() {
    it('destroys the current user', function() {
      ctrl.authenticate('Terry');
      ctrl.unauth('Terry');
      expect(ctrl.currentUser).toBeUndefined();
    });
  });
});
