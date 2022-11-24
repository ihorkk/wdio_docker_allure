class SupportCenterPage {
  get searchInput() {
    return $("[name=q]");
  }

  get results() {
    return $$('a[href*="/en/articles/"]');
  }

  async search({ value }) {
    await this.searchInput.setValue(value);
    await browser.keys("\uE007");
  }

  open() {
    browser.url("https://support.telnyx.com/en/");
    browser.maximizeWindow();
  }
}

module.exports = new SupportCenterPage();
