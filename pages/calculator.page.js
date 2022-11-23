class CalculatorPage {

    get messagingApiCheckBox () {
        return $('//div[text()="Messaging API"]')
    }

    get elasticSipCheckBox () {
        return $('//div[text()="Elastic SIP Trunking"]')
    }

    get voiceApiCheckBox () {
        return $('//div[text()="Voice API"]')
    }

    get continueBtn () {
        return $('//button[text()="Continue"]')
    }

    get localNumbersQuantity () {
        return $('#local-numbers')
    }

    get tollFreeNumbersQuantity () {
        return $('#toll-free-numbers')
    }

    get decreaseLocalNumbersBtn () {
        return $('.sc-948d727a-0 > div:nth-of-type(1) button:nth-of-type(1)')
    }

    get increaseLocalNumbersBtn () {
        return $('.sc-948d727a-0 > div:nth-of-type(1) button:nth-of-type(2)')
    }

    get decreaseTollFreeNumbersBtn () {
        return $('.sc-948d727a-0 > div:nth-of-type(2) button:nth-of-type(1)')
    }

    get increaseTollFreeNumbersBtn () {
        return $('.sc-948d727a-0 > div:nth-of-type(2) button:nth-of-type(2)')
    }

    get messagingTable () {
        return $('//div[text()="Messaging"]')
    }

    get elasticSipTable () {
        return $('//div[text()="Elastic SIP Trunking"]')
    }

    get voiceApiTable () {
        return $('//div[text()="Voice API"]')
    }

    get sendSmsQuantity () {
        return $('#send-sms')
    }

    get receiveSmsQuantity () {
        return $('#receive-sms')
    }

    get sendMmsQuantity () {
        return $('#send-mms')
    }

    get receiveMmsQuantity () {
        return $('#receive-mms')
    }

    get receiveInboundCallsLocalQuantity () {
        return $('#receive-inbound-calls-to-local-numbers')
    }

    get receiveInboundCallsTollFreeQuantity () {
        return $('#receive-inbound-calls-to-toll-free-numbers')
    }

    get makeOutBoundCallsQuantity () {
        return $('#make-outbound-calls')
    }

    get receiveInboundCallControlQuantity () {
        return $('#receive-inbound-calls-with-call-control')
    }

    get makeOutboundCallControlQuantity () {
        return $('#make-outbound-calls-with-call-control')
    }

    get yourSavingsInfo () {
        return $('span[class*=fdlLDD]')
    }  

    get tryTelnyxBtn () {
        return $('//a[text()="Try Telnyx for free"]')
    }

    get firsNameInput () {
        return $('#FirstName')
    }

    get lastNameInput () {
        return $('#LastName')
    }

    get workEmail () {
        return $('#Email')
    }

    get companyWebsite () {
        return $('#Website')
    }

    get submitBtn () {
        return $('button[type="submit"]')
    }

    get fullPriceTable () {
        return $('[class="sc-e301effb-5 cBKByE"]')
    }

    get calculatorHeader () {
        return $('//h2[text()="Which products do you use?"]')
    }

    async messagingApiSavings () {
        await this.calculatorHeader.scrollIntoView();
        await this.messagingApiCheckBox.click();
        await this.continueBtn.click();
        await this.continueBtn.click();
    }

    async elasticSipSavings () {
        await this.calculatorHeader.scrollIntoView();
        await this.elasticSipCheckBox.click();
        await this.continueBtn.click();
        await this.continueBtn.click();
    }

    async voiceApiSavings () {
        await this.calculatorHeader.scrollIntoView();
        await this.voiceApiCheckBox.click();
        await this.continueBtn.click();
        await this.continueBtn.click();
    }

    async allProductsSavings () {
        await this.calculatorHeader.scrollIntoView();
        await this.messagingApiCheckBox.click();
        await this.elasticSipCheckBox.click();
        await this.voiceApiCheckBox.click();
        await this.continueBtn.click();
        await this.continueBtn.click();
    }

    async removeMessagingApiSavings () {
        await this.messagingApiCheckBox.click();
        await this.continueBtn.click();
        await this.localNumbersQuantity.setValue("0");
        await this.tollFreeNumbersQuantity.setValue("0");
        await this.continueBtn.click();
        await this.sendSmsQuantity.setValue("0");
        await this.receiveSmsQuantity.setValue("0");
        await this.sendMmsQuantity.setValue("0");
        await this.receiveMmsQuantity.setValue("0");
    }

    async removeElasticSipSavings () {
        await this.elasticSipCheckBox.click();
        await this.continueBtn.click();
        await this.localNumbersQuantity.setValue("0");
        await this.tollFreeNumbersQuantity.setValue("0");
        await this.continueBtn.click();
        await this.receiveInboundCallsLocalQuantity.setValue("0");
        await this.receiveInboundCallsTollFreeQuantity.setValue("0");
        await this.makeOutBoundCallsQuantity.setValue("0");
    }

    async removeVoiceApiSavings () {
        await this.voiceApiCheckBox.click();
        await this.continueBtn.click();
        await this.localNumbersQuantity.setValue("0");
        await this.tollFreeNumbersQuantity.setValue("0");
        await this.continueBtn.click();
        await this.receiveInboundCallControlQuantity.setValue("0");
        await this.makeOutboundCallControlQuantity.setValue("0");
    }

    async getFullPrice ({ FirstName, LastName, Email, Website }) {
        await this.firsNameInput.setValue(FirstName);
        await this.lastNameInput.setValue(LastName);
        await this.workEmail.setValue(Email);
        await this.companyWebsite.setValue(Website);
        await this.submitBtn.click();
    }

    open () {
        browser.url('twilio-pricing-calculator');
        browser.maximizeWindow();
    }

}

module.exports = new CalculatorPage();