import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
import signUpPage from "../../pages/signUpPage.js";
// import voiceApiPage from "../../tests/pages/voiceApiPage";
// import careersPages from "../../tests/pages/careersPages";
// import versusPage from "../../tests/pages/versusPage";
// import blogPage from "../../tests/pages/blogPage";
// import pricingPage from "../../tests/pages/pricingPage";

When("I input email first name password and invalid last name", () => {
  homepage.clickOnSignUp();
  signUpPage.enterEmail();
  signUpPage.enterFirstName();
  signUpPage.enterPassword();
});
When("I check Terms and Conditions box", () => {
  signUpPage.tickTermsAndConditions();
});
When("User pushes the Sign up button", () => {
  signUpPage.clickSignUpBtn();
});
Then("Validate the last name warning message", () => {
  signUpPage.checkLastNameWarnMsg();
});
