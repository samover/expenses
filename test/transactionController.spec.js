describe('TransactionController', function() {
  beforeEach(module('App'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TransactionController');
  }));

  it('Initialises with an empty transaction and daterange', function() {
    expect(ctrl.transactions).toBeUndefined();
    expect(ctrl.daterange).toBeUndefined();
  });
});
