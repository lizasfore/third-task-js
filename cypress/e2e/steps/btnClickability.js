import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
import versusPage from "../../pages/versusPage";

When("I click on TELNYX VS. AMAZON S3 link", () => {
  homepage.clickOnVsLink();
});
When("I scroll to the details button", () => {
  versusPage.scrollIntoBtn();
});
Then("Validate the details button is enabled and click on it", () => {
  versusPage.checkBtnClickability();
});
