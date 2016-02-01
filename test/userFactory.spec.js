describe('factory: Users', function() {
  var users, httpBackend, userList;

  userList = [
    {
      "id": 1,
      "username": "Terry",
    },
    {
      "id": 2,
      "username": "Angel",
    },
    {
      "id": 3,
      "username": "Miracle",
    }
  ]

  beforeEach(module('ExpensesApp'));

  beforeEach(inject(function(Users) {
    users = Users;
  }));

  beforeEach(inject(function($httpBackend){
    httpBackend = $httpBackend;
    httpBackend
      .when("GET", 'http://localhost:3000/api/v1/users')
      .respond(
        { users: userList }
      );
  }));

  afterEach(function(){
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('authenticates a user and returns that a user is authenticated', function() {
    users.authenticate('Terry');
    expect(users.isAuthenticated()).toBe(true);
    httpBackend.flush();
  });

  it('unauthenticates an authenticated user', function() {
    users.authenticate('Terry');
    users.unauth();
    expect(users.isAuthenticated()).toBe(false);
    httpBackend.flush();
  });

  it('authenicates a user and returns the current user', function() {
    users.authenticate('Terry');
    expect(users.getCurrentUser()).toEqual(userList[0]);
    httpBackend.flush();
  });
});
