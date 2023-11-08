import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
// import signUpPage from "../../pages/signUpPage.js";
import voiceApiPage from "../../pages/voiceApiPage";
// import careersPages from "../../pages/careersPages";
// import versusPage from "../../pages/versusPage";
// import blogPage from "../../pages/blogPage";
// import pricingPage from "../../pages/pricingPage";

When("I click on Products button in navigation", () => {
  homepage.clickNavProdBtn();
});
When("I click on Voice API link", () => {
  homepage.clickNavVoiceApiBtn();
});
Then("Validate the URL containing the Voice API tag", () => {
  voiceApiPage.checkUrlContainsVoice();
});
