import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
import pricingPage from "../../pages/pricingPage";

When("I click on Pricing button in navigation", () => {
  homepage.clickPricingBtn();
});
When("I click on Messaging API", () => {
  pricingPage.clickOnMsgApi();
});
When("I click on the See Plan button", () => {
  pricingPage.clickOnVolumePricing();
});
Then("Validate the Volume Pricing page part visibility", () => {
  pricingPage.checkVolumeSection();
});
