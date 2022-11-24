class PricingSipPage {
  get form() {
    return $("#pricing_download_form");
  }

  get firstNameInput() {
    return $('input[name="FirstName"]');
  }

  get lastNameInput() {
    return $('input[name="LastName"]');
  }

  get emailInput() {
    return $('input[name="Email"]');
  }

  get downloadBtn() {
    return $('button[type="submit"]');
  }

  get successfullMesage() {
    return $('//div[contains(text(),"Thank you. We")]');
  }

  get errorMessage() {
    return $$('div[aria-live="assertive"]');
  }

  async fillForm({ firstName, lastName, email }) {
    await this.form.scrollIntoView();
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.emailInput.setValue(email);
    await this.downloadBtn.click();
  }

  open() {
    browser.url("pricing/elastic-sip");
    browser.maximizeWindow();
  }
}

module.exports = new PricingSipPage();
