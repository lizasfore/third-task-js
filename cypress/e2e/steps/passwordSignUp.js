import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
import signUpPage from "../../pages/signUpPage.js";

When("I input email first name last name and invalid password", () => {
  homepage.clickOnSignUp();
  signUpPage.enterEmail();
  signUpPage.enterFirstName();
  signUpPage.enterLastName();
  signUpPage.enterWrongPassword();
});
When("I tick Terms and Conditions box", () => {
  signUpPage.tickTermsAndConditions();
});
When("User push the Sign up button", () => {
  signUpPage.clickSignUpBtn();
});
Then("Validate the password warn message", () => {
  signUpPage.checkPasswordWarnMsg();
});
