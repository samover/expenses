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
      .when("GET", users.apiUrl)
      .respond(
          { users: userList }
          );
  }));

  afterEach(function(){
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('returns api response with all users', function() {
    users.get(function(response) {
      expect(response.users).toEqual(userList);
    });
    httpBackend.flush();
  });
});
