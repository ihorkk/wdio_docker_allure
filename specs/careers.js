const CareersPage = require("../pages/careers.page");
const MainPage = require("../pages/main.page");
const GreenHousePage = require("../pages/greenhouse.page");

describe("Careers", () => {
  beforeEach("Open the careers page and close the cookie dialog", async () => {
    CareersPage.open();
    MainPage.cookiesDialog();
  });

  it('Should verify "Apply With LinkedIn" is present', async () => {
    await CareersPage.listPositions[0].waitForClickable();
    await CareersPage.listPositions[0].click();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    await GreenHousePage.applyBtn.click();
    await expect(GreenHousePage.applyLinkedinBtn).toBeExisting();
  });
});
