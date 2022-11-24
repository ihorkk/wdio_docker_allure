class MainPage {
  get acceptCookiesBtn() {
    return $('[aria-label="close and deny"]');
  }

  get linkedin() {
    return $('[href="https://www.linkedin.com/company/telnyx/"]');
  }
  
  get twitter() {
    return $('[href="https://twitter.com/telnyx"]');
  }

  get facebook() {
    return $('[href="https://www.facebook.com/Telnyx/"]');
  }

  open() {
    browser.url("/");
    browser.maximizeWindow();
  }

  cookiesDialog() {
    if (this.acceptCookiesBtn.isDisplayed()) {
      this.acceptCookiesBtn.click();
    }
  }
}

module.exports = new MainPage();
