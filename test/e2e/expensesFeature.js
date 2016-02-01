describe('Expenses App', function() {
  var authenticate;

  beforeEach(function() {
    browser.get('http://localhost:9292');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Expenses App');
  });

  it('allows a user to log in', function() {
    var loginBox = browser.findElement(by.id('loginBox'));
    var username = browser.findElement(by.model('userName'));
    var login = browser.findElement(by.buttonText('Login'));

    expect(loginBox.isDisplayed()).toBeTruthy();

    username.sendKeys('Miles');
    login.click();

    expect(loginBox.isDisplayed()).toBeFalsy();

    var logoutText = browser.findElement(by.linkText('Logout Miles'));
    expect(logoutText.isDisplayed()).toBeTruthy();
  });

  it('shows a user\'s expenses upon login', function() {
    authenticate('Miles');

    var logoutText = browser.findElement(by.linkText('Logout Miles'));
    expect(logoutText.isDisplayed()).toBeTruthy();
    var expenses = element.all(by.repeater("expense in transCtrl.userExpenses()"));
    expect(expenses.length).toBeGreaterThan(0);
  });
  
  authenticate = function(user) {
    var username = browser.findElement(by.model('userName'));
    var login = browser.findElement(by.buttonText('Login'));
    username.sendKeys(user);
    login.click();
  }
});
