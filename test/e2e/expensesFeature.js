describe('Expenses App', function() {
  var authenticate;

  beforeEach(function() {
    browser.get('http://localhost:9292');
  });

  afterEach(function () {
    browser.executeScript('window.sessionStorage.clear();');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Expenses App');
  });

  it('allows a user to log in', function() {
    var loginBox = browser.findElement(by.id('loginBox'));

    expect(loginBox.isDisplayed()).toBeTruthy();

    authenticate('Miles');

    expect(loginBox.isDisplayed()).toBeFalsy();

    var logoutText = browser.findElement(by.linkText('Logout Miles'));
    expect(logoutText.isDisplayed()).toBeTruthy();
  });

  it('allows a user to log out', function() {
    var loginBox = browser.findElement(by.id('loginBox'));

    authenticate('Miles');

    var logoutText = browser.findElement(by.linkText('Logout Miles'));
    logoutText.click();

    expect(loginBox.isDisplayed()).toBeTruthy();
    expect(logoutText.isDisplayed()).toBeFalsy();
  });

  it('shows a user\'s expenses upon login', function() {
    authenticate('Miles');

    var expenses = element.all(by.repeater('expense in trans.expenses'));
    expect(expenses.count()).toBeGreaterThan(0);
  });

  authenticate = function(user) {
    var username = browser.findElement(by.model('userName'));
    var login = browser.findElement(by.buttonText('Login'));
    username.sendKeys(user);
    login.click();
  }
});
