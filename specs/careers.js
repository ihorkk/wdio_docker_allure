const CareersPage = require('../pages/careers.page');
const MainPage = require('../pages/main.page');
const GreenHousePage = require('../pages/greenhouse.page');


describe('Careers', () => {
    beforeEach('Open the careers page and close the cookie dialog', async () => {
        CareersPage.open();
        if (MainPage.acceptCookiesBtn.isDisplayed()) {
            MainPage.acceptCookiesBtn.click()
        }
    });

    it('Should verify "Apply With LinkedIn" is present', async () => {
        await CareersPage.firstPosition[0].waitForClickable();
        await CareersPage.firstPosition[0].click();
        await browser.pause(2000);
        await browser.switchWindow('greenhouse');
        await GreenHousePage.applyBtn.click();
        await expect(GreenHousePage.applyLinkedinBtn).toBeExisting();
    });
});