import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
import signUpPage from "../../pages/signUpPage.js";
// import voiceApiPage from "../../tests/pages/voiceApiPage";
// import careersPages from "../../tests/pages/careersPages";
// import versusPage from "../../tests/pages/versusPage";
// import blogPage from "../../tests/pages/blogPage";
// import pricingPage from "../../tests/pages/pricingPage";

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
