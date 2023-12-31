import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
import signUpPage from "../../pages/signUpPage.js";

When("I input email last name password and invalid first name", () => {
  homepage.clickOnSignUp();
  signUpPage.enterEmail();
  signUpPage.enterLastName();
  signUpPage.enterPassword();
});
When("I check Terms and Conditions checkbox", () => {
  signUpPage.tickTermsAndConditions();
});
When("User clicks on Sign up button", () => {
  signUpPage.clickSignUpBtn();
});
Then("Validate the first name warning message", () => {
  signUpPage.checkFirstNameWarnMsg();
});
