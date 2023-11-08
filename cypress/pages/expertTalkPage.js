class ExpertTalkPage {
  elements = {
    requestReason: () => cy.get("#Reason_for_Contact__c"),

    supportOption: () => cy.xpath("//option[@value='Support']"),

    reasonWarnMsg: () => cy.get("#ValidMsgReason_for_Contact__c"),

    firstName: () => cy.get("#FirstName"),

    lastName: () => cy.get("#LastName"),

    email: () => cy.get("#Email"),

    countrySelect: () => cy.get("#Phone_Number_Extension__c"),

    phoneBase: () => cy.get("#Phone_Number_Base__c"),

    compSite: () => cy.get("#Website"),

    requestDescribe: () => cy.get("#Form_Additional_Information__c"),

    hearAboutUs: () => cy.get("#How_did_you_hear_about_Telnyx_Open__c"),

    submitBtn: () => cy.xpath("//button[@type='submit']"),

    firstNameMsg: () => cy.get("#ValidMsgFirstName"),

    lastNameMsg: () => cy.get("#ValidMsgLastName"),

    requestDescMsg: () => cy.get("#ValidMsgForm_Additional_Information__c"),

    hearAboutUsMsg: () =>
      cy.get("#ValidMsgHow_did_you_hear_about_Telnyx_Open__c"),
  };

  selectReasonSupport() {
    this.elements.requestReason().select("Support");
  }

  inputFirstName() {
    this.elements.firstName().click().type("Qwerty");
  }

  inputLastName() {
    this.elements.lastName().click().type("Zxcvb");
  }

  inputEmail() {
    this.elements.email().click().type("xfgjhfj@gmail.com");
  }

  inputCompSite() {
    this.elements.compSite().click().type("xhrftjyj@gmail.com");
  }

  inputRequest() {
    this.elements.requestDescribe().click().type("xnxfgjxfhgjfxgjdtjazdazjtj");
  }

  inputHearAboutMsg() {
    this.elements.hearAboutUs().click().type("zfgjfdgjjfjzjjjdfjzfdj");
  }

  submitBtnClick() {
    this.elements.submitBtn().click();
  }

  checkRsnWarnMsg() {
    this.elements.reasonWarnMsg().should("be.visible");
  }

  checkFNameMsg() {
    this.elements.firstNameMsg().should("be.visible");
  }
  checkLNameMsg() {
    this.elements.lastNameMsg().should("be.visible");
  }
  checkRequestDescMsg() {
    this.elements.requestDescMsg().should("be.visible");
  }
  checkHearAboutUsMsg() {
    this.elements.hearAboutUsMsg().should("be.visible");
  }
}

module.exports = new ExpertTalkPage();
