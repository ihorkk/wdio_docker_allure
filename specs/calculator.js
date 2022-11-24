const MainPage = require("../pages/main.page");
const CalculatorPage = require("../pages/calculator.page");
const Generate = require("../helper/chance");

describe("Twilio Pricing Calculator", () => {
  beforeEach(
    "Open the calculator page and close the cookie dialog",
    async () => {
      CalculatorPage.open();
      MainPage.cookiesDialog();
    }
  );

  it("Should show savings for messaging API", async () => {
    await CalculatorPage.messagingApiSavings();
    await expect(CalculatorPage.yourSavingsInfo).toBeDisplayed();
  });

  it("Should show savings for Elastic SIP Trunking", async () => {
    await CalculatorPage.elasticSipSavings();
    await expect(CalculatorPage.yourSavingsInfo).toBeDisplayed();
  });

  it("Should show savings for Voice API", async () => {
    await CalculatorPage.voiceApiSavings();
    await expect(CalculatorPage.yourSavingsInfo).toBeDisplayed();
  });

  it("Should show savings for messaging API, Elastic SIP Trunking, Voice API", async () => {
    await CalculatorPage.allProductsSavings();
    await expect(CalculatorPage.messagingTable).toBeDisplayed();
    await expect(CalculatorPage.elasticSipTable).toBeDisplayed();
    await expect(CalculatorPage.voiceApiTable).toBeDisplayed();
    await expect(CalculatorPage.yourSavingsInfo).toBeDisplayed();
  });

  it.only("Should show 0$ savings for messaging API if a user remove the services", async () => {
    await CalculatorPage.removeMessagingApiSavings(0, 0, 0, 0, 0, 0);
    await expect(CalculatorPage.yourSavingsInfo).toHaveText("$0/ year");
  });

  it("Should show 0$ savings for Elastic SIP if a user remove the services", async () => {
    await CalculatorPage.removeElasticSipSavings();
    await expect(CalculatorPage.yourSavingsInfo).toHaveText("$0/ year");
  });

  it("Should show 0$ savings for Voice API if a user remove the services", async () => {
    await CalculatorPage.removeVoiceApiSavings();
    await expect(CalculatorPage.yourSavingsInfo).toHaveText("$0/ year");
  });

  it("Should show the full price breakdown for messaging API", async () => {
    await CalculatorPage.messagingApiSavings();
    await CalculatorPage.getFullPrice({
      FirstName: Generate.generateFirstName,
      LastName: Generate.generateLastName,
      Email: Generate.generateEmail,
      Website: Generate.generateUrl,
    });
    await expect(CalculatorPage.submitBtn).not.toBeDisplayed();
    await expect(CalculatorPage.fullPriceTable).toBeDisplayed();
  });

  it("Should show the full price breakdown for Elastic SIP Trunking", async () => {
    await CalculatorPage.elasticSipSavings();
    await CalculatorPage.getFullPrice({
      FirstName: Generate.generateFirstName,
      LastName: Generate.generateLastName,
      Email: Generate.generateEmail,
      Website: Generate.generateUrl,
    });
    await expect(CalculatorPage.submitBtn).not.toBeDisplayed();
    await expect(CalculatorPage.fullPriceTable).toBeDisplayed();
  });

  it("Should show the full price breakdown for Voice API", async () => {
    await CalculatorPage.voiceApiSavings();
    await CalculatorPage.getFullPrice({
      FirstName: Generate.generateFirstName,
      LastName: Generate.generateLastName,
      Email: Generate.generateEmail,
      Website: Generate.generateUrl,
    });
    await expect(CalculatorPage.submitBtn).not.toBeDisplayed();
    await expect(CalculatorPage.fullPriceTable).toBeDisplayed();
  });

  it("Should show the full price breakdown for messaging API, Elastic SIP, Voice API", async () => {
    await CalculatorPage.allProductsSavings();
    await CalculatorPage.getFullPrice({
      FirstName: Generate.generateFirstName,
      LastName: Generate.generateLastName,
      Email: Generate.generateEmail,
      Website: Generate.generateUrl,
    });
    await expect(CalculatorPage.submitBtn).not.toBeDisplayed();
    await expect(CalculatorPage.fullPriceTable).toBeDisplayed();
  });
});
