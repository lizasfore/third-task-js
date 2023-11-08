import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
import signUpPage from "../../pages/signUpPage.js";

When("I enter first name last name password and invalid email", () => {
  homepage.clickOnSignUp();
  signUpPage.enterWrongEmail();
  signUpPage.enterFirstName();
  signUpPage.enterLastName();
  signUpPage.enterPassword();
});
When("I tick Terms and Conditions checkbox", () => {
  signUpPage.tickTermsAndConditions();
});
When("User click on Sign up button", () => {
  signUpPage.clickSignUpBtn();
});
Then("Validate the email warn message", () => {
  signUpPage.checkEmailWarnMsg();
});
