import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
import voiceApiPage from "../../pages/voiceApiPage";

When("I click on Products button in navigation", () => {
  homepage.clickNavProdBtn();
});
When("I click on Voice API link", () => {
  homepage.clickNavVoiceApiBtn();
});
Then("Validate the URL containing the Voice API tag", () => {
  voiceApiPage.checkUrlContainsVoice();
});
