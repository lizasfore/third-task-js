import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
// import signUpPage from "../../pages/signUpPage.js";
// import voiceApiPage from "../../pages/voiceApiPage";
// import careersPages from "../../pages/careersPages";
import versusPage from "../../pages/versusPage";
// import blogPage from "../../pages/blogPage";
// import pricingPage from "../../pages/pricingPage";

When("I click on TELNYX VS. AMAZON S3 link", () => {
  homepage.clickOnVsLink();
});
When("I scroll to the details button", () => {
  versusPage.scrollIntoBtn();
});
Then("Validate the details button is enabled and click on it", () => {
  versusPage.checkBtnClickability();
});
