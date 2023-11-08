class VersusPage {
  elements = {
    detailBtn: () => cy.xpath("//button[@aria-controls='radix-:Rl6jllm:']"),
  };

  scrollIntoBtn() {
    this.elements.detailBtn().scrollIntoView().should("be.visible");
  }

  checkBtnClickability() {
    this.elements.detailBtn().should("be.enabled").click();
  }
}

module.exports = new VersusPage();
