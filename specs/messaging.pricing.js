const MainPage = require("../pages/main.page");
const PricingMessagingPage = require("../pages/messaging.page");
const Generate = require("../helper/chance");

describe("Download Phone Number and Outbound SMS pricing", () => {
  beforeEach("Open a browser and close the cookie dialog", async () => {
    PricingMessagingPage.open();
    MainPage.cookiesDialog();
  });

  it("Should download Messaging pricing with valid credentials", async () => {
    await PricingMessagingPage.fillForm({
      firstName: Generate.generateFirstName,
      lastName: Generate.generateLastName,
      email: Generate.generateEmail,
    });
    await expect(PricingMessagingPage.successfullMesage).toBeDisplayed();
  });

  it("Should not download Messaging pricing with empty inputs", async () => {
    await PricingMessagingPage.fillForm({});
    await expect(PricingMessagingPage.errorMessage).toBeElementsArrayOfSize(3);
  });
});
