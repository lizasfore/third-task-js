class PricingPage {
  elements = {
    msgApiLink: () =>
      cy.xpath("//div[@class='c-uXJmG']/a[@href='/pricing/messaging']"),

    volumeBasePricing: () => cy.xpath("//div[@class='c-hlVoWg c-cVmaA']"),
    volumeBaseSection: () =>
      cy.xpath("//section[contains(@class, 'backgroundColor-black')]"),
  };

  clickOnMsgApi() {
    this.elements.msgApiLink().click();
  }

  clickOnVolumePricing() {
    this.elements.volumeBasePricing().click();
  }

  checkVolumeSection() {
    this.elements.volumeBaseSection().should("be.visible");
  }
}

module.exports = new PricingPage();
