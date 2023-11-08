import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
// import signUpPage from "../../pages/signUpPage.js";
// import voiceApiPage from "../../pages/voiceApiPage";
// import careersPages from "../../pages/careersPages";
// import versusPage from "../../pages/versusPage";
// import blogPage from "../../pages/blogPage";
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
