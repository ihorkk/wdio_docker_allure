class CalculatorPage {
  get messagingApiCheckBox() {
    return $('//div[text()="Messaging API"]');
  }

  get elasticSipCheckBox() {
    return $('//div[text()="Elastic SIP Trunking"]');
  }

  get voiceApiCheckBox() {
    return $('//div[text()="Voice API"]');
  }

  get continueBtn() {
    return $('//button[text()="Continue"]');
  }

  get localNumbersQuantity() {
    return $("#local-numbers");
  }

  get tollFreeNumbersQuantity() {
    return $("#toll-free-numbers");
  }

  get decreaseLocalNumbersBtn() {
    return $('//label[@for="local-numbers"]/following-sibling::div/button[1]');
  }

  get increaseLocalNumbersBtn() {
    return $('//label[@for="local-numbers"]/following-sibling::div/button[2]');
  }

  get decreaseTollFreeNumbersBtn() {
    return $(
      '//label[@for="toll-free-numbers"]/following-sibling::div/button[1]'
    );
  }

  get increaseTollFreeNumbersBtn() {
    return $(
      '//label[@for="toll-free-numbers"]/following-sibling::div/button[2]'
    );
  }

  get decreaseSendSmsBtn() {
    return $('//label[@for="send-sms"]/following-sibling::div/button[1]');
  }

  get increaseSendSmsBtn() {
    return $('//label[@for="send-sms"]/following-sibling::div/button[2]');
  }

  get decreaseReceiveSmsBtn() {
    return $('//label[@for="receive-sms"]/following-sibling::div/button[1]');
  }

  get increaseReceiveSmsBtn() {
    return $('//label[@for="receive-sms"]/following-sibling::div/button[2]');
  }

  get decreaseSendMmsBtn() {
    return $('//label[@for="send-mms"]/following-sibling::div/button[1]');
  }

  get increaseSendMmsBtn() {
    return $('//label[@for="send-mms"]/following-sibling::div/button[2]');
  }

  get decreaseReceiveMmsBtn() {
    return $('//label[@for="receive-mms"]/following-sibling::div/button[1]');
  }

  get increaseReceiveMmsBtn() {
    return $('//label[@for="receive-mms"]/following-sibling::div/button[2]');
  }

  get sendSmsQuantity() {
    return $("#send-sms");
  }

  get receiveSmsQuantity() {
    return $("#receive-sms");
  }

  get sendMmsQuantity() {
    return $("#send-mms");
  }

  get receiveMmsQuantity() {
    return $("#receive-mms");
  }

  get messagingTable() {
    return $('//div[text()="Messaging"]');
  }

  get decreaseReceiveInboundCallsLocalBtn() {
    return $(
      '//label[@for="receive-inbound-calls-to-local-numbers"]/following-sibling::div/button[1]'
    );
  }

  get increaseReceiveInboundCallsLocalBtn() {
    return $(
      '//label[@for="receive-inbound-calls-to-local-numbers"]/following-sibling::div/button[2]'
    );
  }

  get decreaseReceiveInboundCallsTollFreeBtn() {
    return $(
      '//label[@for="receive-inbound-calls-to-toll-free-numbers"]/following-sibling::div/button[1]'
    );
  }

  get increaseReceiveInboundCallsTollFreeBtn() {
    return $(
      '//label[@for="receive-inbound-calls-to-toll-free-numbers"]/following-sibling::div/button[2]'
    );
  }

  get decreaseMakeOutBoundCalls() {
    return $(
      '//label[@for="make-outbound-calls"]/following-sibling::div/button[1]'
    );
  }

  get increaseMakeOutBoundCalls() {
    return $(
      '//label[@for="make-outbound-calls"]/following-sibling::div/button[2]'
    );
  }

  get receiveInboundCallsLocalQuantity() {
    return $("#receive-inbound-calls-to-local-numbers");
  }

  get receiveInboundCallsTollFreeQuantity() {
    return $("#receive-inbound-calls-to-toll-free-numbers");
  }

  get makeOutBoundCallsQuantity() {
    return $("#make-outbound-calls");
  }

  get elasticSipTable() {
    return $('//div[text()="Elastic SIP Trunking"]');
  }

  get decreaseReceiveInboundCallControl() {
    return $(
      '//label[@for="receive-inbound-calls-with-call-control"]/following-sibling::div/button[1]'
    );
  }

  get increaseReceiveInboundCallControl() {
    return $(
      '//label[@for="receive-inbound-calls-with-call-control"]/following-sibling::div/button[2]'
    );
  }

  get decreaseMakeOutboundCallControl() {
    return $(
      '//label[@for="make-outbound-calls-with-call-control"]/following-sibling::div/button[1]'
    );
  }

  get increaseMakeOutboundCallControl() {
    return $(
      '//label[@for="make-outbound-calls-with-call-control"]/following-sibling::div/button[2]'
    );
  }

  get receiveInboundCallControlQuantity() {
    return $("#receive-inbound-calls-with-call-control");
  }

  get makeOutboundCallControlQuantity() {
    return $("#make-outbound-calls-with-call-control");
  }

  get voiceApiTable() {
    return $('//div[text()="Voice API"]');
  }

  get yourSavingsInfo() {
    return $("span[class*=fdlLDD]");
  }

  get tryTelnyxBtn() {
    return $('//a[text()="Try Telnyx for free"]');
  }

  get firsNameInput() {
    return $("#FirstName");
  }

  get lastNameInput() {
    return $("#LastName");
  }

  get workEmail() {
    return $("#Email");
  }

  get companyWebsite() {
    return $("#Website");
  }

  get submitBtn() {
    return $('button[type="submit"]');
  }

  get fullPriceTable() {
    return $('[class="sc-e301effb-5 cBKByE"]');
  }

  get calculatorHeader() {
    return $('//h2[text()="Which products do you use?"]');
  }

  async messagingApiSavings() {
    await this.calculatorHeader.scrollIntoView();
    await this.messagingApiCheckBox.click();
    await this.continueBtn.click();
    await this.continueBtn.click();
  }

  async elasticSipSavings() {
    await this.calculatorHeader.scrollIntoView();
    await this.elasticSipCheckBox.click();
    await this.continueBtn.click();
    await this.continueBtn.click();
  }

  async voiceApiSavings() {
    await this.calculatorHeader.scrollIntoView();
    await this.voiceApiCheckBox.click();
    await this.continueBtn.click();
    await this.continueBtn.click();
  }

  async allProductsSavings() {
    await this.calculatorHeader.scrollIntoView();
    await this.messagingApiCheckBox.click();
    await this.elasticSipCheckBox.click();
    await this.voiceApiCheckBox.click();
    await this.continueBtn.click();
    await this.continueBtn.click();
  }

  async removeMessagingApiSavings(
    neededLocalNumbersValue,
    neededTollFreeNumbersValue,
    neededSendSmsValue,
    neededReceiveSmsValue,
    neededSendMmsValue,
    neededReceiveMmsValue
  ) {
    await this.messagingApiCheckBox.click();
    await this.continueBtn.click();
    const currentLocalNumbersValue = await this.localNumbersQuantity.getValue();
    for (
      let index = 0;
      index < Math.abs(currentLocalNumbersValue - neededLocalNumbersValue) / 10;
      index++
    ) {
      if (currentLocalNumbersValue > neededLocalNumbersValue)
        await this.decreaseLocalNumbersBtn.click();
      if (currentLocalNumbersValue < neededLocalNumbersValue)
        await this.increaseLocalNumbersBtn.click();
    }
    const currentTollFreeNumbersValue =
      await this.tollFreeNumbersQuantity.getValue();
    for (
      let index = 0;
      index <
      Math.abs(currentTollFreeNumbersValue - neededTollFreeNumbersValue) / 10;
      index++
    ) {
      if (currentTollFreeNumbersValue > neededTollFreeNumbersValue)
        await this.decreaseTollFreeNumbersBtn.click();
      if (currentTollFreeNumbersValue < neededTollFreeNumbersValue)
        await this.increaseTollFreeNumbersBtn.click();
    }
    await this.continueBtn.click();
    const currentSendSmsValue = await this.sendSmsQuantity.getValue();
    for (
      let index = 0;
      index < Math.abs(currentSendSmsValue - neededSendSmsValue) / 25000;
      index++
    ) {
      if (currentSendSmsValue > neededSendSmsValue)
        await this.decreaseSendSmsBtn.click();
      if (currentSendSmsValue < neededSendSmsValue)
        await this.increaseSendSmsBtn.click();
    }
    const currentReceiveSmsValue = await this.receiveSmsQuantity.getValue();
    for (
      let index = 0;
      index < Math.abs(currentReceiveSmsValue - neededReceiveSmsValue) / 25000;
      index++
    ) {
      if (currentReceiveSmsValue > neededReceiveSmsValue)
        await this.decreaseReceiveSmsBtn.click();
      if (currentReceiveSmsValue < neededReceiveSmsValue)
        await this.increaseReceiveSmsBtn.click();
    }
    const currentSendMmsValue = await this.sendMmsQuantity.getValue();
    for (
      let index = 0;
      index < Math.abs(currentSendMmsValue - neededSendMmsValue) / 25000;
      index++
    ) {
      if (currentSendMmsValue > neededSendMmsValue)
        await this.decreaseSendMmsBtn.click();
      if (currentSendMmsValue < neededSendMmsValue)
        await this.increaseSendMmsBtn.click();
    }
    const currentReceiveMmsValue = await this.receiveMmsQuantity.getValue();
    for (
      let index = 0;
      index < Math.abs(currentReceiveMmsValue - neededReceiveMmsValue) / 25000;
      index++
    ) {
      if (currentReceiveMmsValue > neededReceiveMmsValue)
        await this.decreaseReceiveMmsBtn.click();
      if (currentReceiveMmsValue < neededReceiveMmsValue)
        await this.increaseReceiveMmsBtn.click();
    }
  }

  async removeElasticSipSavings() {
    await this.elasticSipCheckBox.click();
    await this.continueBtn.click();
    await this.localNumbersQuantity.setValue("0");
    await this.tollFreeNumbersQuantity.setValue("0");
    await this.continueBtn.click();
    await this.receiveInboundCallsLocalQuantity.setValue("0");
    await this.receiveInboundCallsTollFreeQuantity.setValue("0");
    await this.makeOutBoundCallsQuantity.setValue("0");
  }

  async removeVoiceApiSavings() {
    await this.voiceApiCheckBox.click();
    await this.continueBtn.click();
    await this.localNumbersQuantity.setValue("0");
    await this.tollFreeNumbersQuantity.setValue("0");
    await this.continueBtn.click();
    await this.receiveInboundCallControlQuantity.setValue("0");
    await this.makeOutboundCallControlQuantity.setValue("0");
  }

  async getFullPrice({ FirstName, LastName, Email, Website }) {
    await this.firsNameInput.setValue(FirstName);
    await this.lastNameInput.setValue(LastName);
    await this.workEmail.setValue(Email);
    await this.companyWebsite.setValue(Website);
    await this.submitBtn.click();
  }

  open() {
    browser.url("twilio-pricing-calculator");
    browser.maximizeWindow();
  }
}

module.exports = new CalculatorPage();
