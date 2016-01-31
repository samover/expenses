describe('Expenses App', function() {
  it('has a title', function() {
    browser.get('http://localhost:9292');

    expect(browser.getTitle()).toEqual('Expenses App');
  });
});
