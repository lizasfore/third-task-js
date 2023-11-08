require("cypress-xpath");

class SignUpPage {
  elements = {
    emailInput: () => cy.get("#email"),

    firstNameInput: () => cy.get("#first_name"),

    lastNameInput: () => cy.get("#last_name"),

    passwordInput: () => cy.get("#password"),

    checkBoxTerms: () => cy.get("#terms_and_conditions"),

    signUpBtn: () => cy.xpath("//button[contains(@class, 'c-ddSKil')]"),

    emailMsg: () => cy.get("#email_message"),

    passwordMsg: () => cy.get("#password_message"),

    firstNameMsg: () => cy.get("#first_name_message"),

    lastNameMsg: () => cy.get("#last_name_message"),

    termsMsg: () => cy.get("#terms_and_conditions_message"),
  };

  enterEmail() {
    this.elements.emailInput().click();
    this.elements.emailInput().type("gnsdiofgi@gmail.com");
  }

  enterFirstName() {
    this.elements.firstNameInput().click();
    this.elements.firstNameInput().type("Qwerty");
  }

  enterLastName() {
    this.elements.lastNameInput().click();
    this.elements.lastNameInput().type("Ster");
  }

  enterPassword() {
    this.elements.passwordInput().click();
    this.elements.passwordInput().type("qwesDvsvvfsgh2342-");
  }

  enterWrongEmail() {
    this.elements.emailInput().click();
    this.elements.emailInput().type("gnsdiofgi@dfgds");
  }

  enterWrongPassword() {
    this.elements.passwordInput().click();
    this.elements.passwordInput().type("qwesvsvvfsgh2342");
  }

  clickSignUpBtn() {
    this.elements.signUpBtn().click();
  }

  tickTermsAndConditions() {
    this.elements.checkBoxTerms().check();
  }

  checkEmailWarnMsg() {
    this.elements.emailMsg().should("exist");
  }

  checkFirstNameWarnMsg() {
    this.elements.firstNameMsg().should("exist");
  }

  checkLastNameWarnMsg() {
    this.elements.lastNameMsg().should("exist");
  }

  checkPasswordWarnMsg() {
    this.elements.passwordMsg().should("exist");
  }

  checkTermsWarnMsg() {
    this.elements.termsMsg().should("exist");
  }
}

module.exports = new SignUpPage();
