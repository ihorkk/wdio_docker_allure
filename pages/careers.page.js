class CareersPage {
  get listPositions() {
    return $$('[href*="https://boards.greenhouse.io/telnyx54/jobs/"]');
  }

  open() {
    browser.url("company/careers");
    browser.maximizeWindow();
  }
}

module.exports = new CareersPage();
