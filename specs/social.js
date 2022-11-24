const MainPage = require("../pages/main.page");

describe("Social footer", () => {
  beforeEach("Open the main page and close the cookie dialog", async () => {
    MainPage.open();
    MainPage.cookiesDialog();
  });

  it("Should check LinkedIn", async () => {
    await MainPage.linkedin.click();
    await browser.switchWindow("linkedin");
    await expect(browser).toHaveUrlContaining("linkedin.com");
  });

  it("Should check twitter", async () => {
    await MainPage.twitter.click();
    await browser.switchWindow("twitter");
    await expect(browser).toHaveUrl("https://twitter.com/telnyx");
  });

  it("Should check facebook", async () => {
    await MainPage.facebook.click();
    await browser.switchWindow("facebook");
    await expect(browser).toHaveUrl("https://www.facebook.com/Telnyx/");
  });
});
