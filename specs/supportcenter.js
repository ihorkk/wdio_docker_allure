const MainPage = require("../pages/main.page");
const SupportCenterPage = require("../pages/supportcenter.page");

describe("Search", () => {
  beforeEach(
    "Open the support center page and close the cookie dialog",
    async () => {
      SupportCenterPage.open();
      MainPage.cookiesDialog();
    }
  );

  it("Should enter text and receive 10 results", async () => {
    await SupportCenterPage.search({
      value: "SMS Postman",
    });
    await expect(SupportCenterPage.results).toBeElementsArrayOfSize(10);
  });
});
