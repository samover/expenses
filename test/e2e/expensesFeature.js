describe('Expenses App', function() {
  beforeEach(function() {
    browser.get('http://localhost:9292');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Expenses App');
  });

  it('allows a user to log in', function() {
    var loginBox = browser.findElement(by.id('loginBox'));
    var logoutText = browser.findElement(by.linkText('Logout Andrew'));

    expect(loginBox.isDisplayed()).toBeTruthy();

    loginBox.sendKeys('Andrew');
    loginBox.click();

    expect(loginBox.isDisplayed()).toBeFalsy();
    expect(logoutText.isDisplayed()).toBeTruthy();
  });
});
