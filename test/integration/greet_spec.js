describe("Super amazing Angular app", () => {
  it("has a two-way data binding", () => {
    browser.get("http://localhost:5000");
    element(by.model("greeting")).clear().sendKeys("Yo");
    element(by.binding("greeting")).getText().then((text) => {
      expect(text).toEqual("Yo");
    });
  });
});
