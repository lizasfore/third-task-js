import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
import signUpPage from "../../pages/signUpPage.js";

When("I input email first name last name and password", () => {
  homepage.clickOnSignUp();
  signUpPage.enterEmail();
  signUpPage.enterFirstName();
  signUpPage.enterLastName();
  signUpPage.enterPassword();
});
When("User click the Sign up button", () => {
  signUpPage.clickSignUpBtn();
});
Then("Validate the terms warn message", () => {
  signUpPage.checkTermsWarnMsg();
});
