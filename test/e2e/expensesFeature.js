describe('Expenses App', function() {
  beforeEach(function() {
    browser.get('http://localhost:9292');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Expenses App');
  });

  it('allows a user to log in', function() {
    var loginBox = browser.findElement(by.id('loginBox'));
    var logoutBox = browser.findElement(by.id('logoutBox'));

    loginBox.sendKeys('Andrew');
    loginBox.click();

    expect(loginBox.isPresent()).toBe(false);
    expect(logoutBox.isPresent()).toBe(true);
    expect(logoutBox.getAttribute('value')).toEqual('Logout Andrew');
  });
});
