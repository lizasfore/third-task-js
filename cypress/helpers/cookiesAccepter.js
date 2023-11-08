export function closeCookies() {
  elements = {
    cookieCloseBtn: () =>
      cy.xpath("//button[contains(@class, 'banner-close-button')]"),
  };
  this.elements.cookieCloseBtn().should("be.visible");
  this.elements.cookieCloseBtn().click();
}
