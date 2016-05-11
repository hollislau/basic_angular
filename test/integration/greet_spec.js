describe("Super amazing Angular app", function () {
  it("has a two-way data binding", () => {
    browser.get("http://localhost:5000");
    element(by.model("greeting")).sendKeys("Yo");
    element(by.binding("greeting")).getText().then(function (text) {
      expect(text).toEqual("Yo");
    });
  });
});
