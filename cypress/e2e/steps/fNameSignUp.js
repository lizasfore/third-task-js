import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
import signUpPage from "../../pages/signUpPage.js";
// import voiceApiPage from "../../tests/pages/voiceApiPage";
// import careersPages from "../../tests/pages/careersPages";
// import versusPage from "../../tests/pages/versusPage";
// import blogPage from "../../tests/pages/blogPage";
// import pricingPage from "../../tests/pages/pricingPage";

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
