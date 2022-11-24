const MainPage = require("../pages/main.page");
const PricingSipPage = require("../pages/sippricing.page");
const Generate = require("../helper/chance");

describe("Download SIP Trunking pricing", () => {
  beforeEach("Open a browser and close the cookie dialog", async () => {
    PricingSipPage.open();
    MainPage.cookiesDialog();
  });

  it("Should download SIP pricing with valid credentials", async () => {
    await PricingSipPage.fillForm({
      firstName: Generate.generateFirstName,
      lastName: Generate.generateLastName,
      email: Generate.generateEmail,
    });
    await expect(PricingSipPage.successfullMesage).toBeDisplayed();
  });

  it("Should not download SIP pricing with empty inputs", async () => {
    await PricingSipPage.fillForm({});
    await expect(PricingSipPage.errorMessage).toBeElementsArrayOfSize(3);
  });
});
