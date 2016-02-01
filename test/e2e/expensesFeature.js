describe('Expenses App', function() {
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

    browser.driver.sleep(2000);

    expect(loginBox.isDisplayed()).toBeFalsy();

    var logoutText = browser.findElement(by.linkText('Logout Miles'));
    expect(logoutText.isDisplayed()).toBeTruthy();
  });
});
