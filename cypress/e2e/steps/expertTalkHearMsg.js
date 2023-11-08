import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import expertTalkPage from "../../pages/expertTalkPage.js";

When("I input all needed credentials without a Hear about us message", () => {
  expertTalkPage.selectReasonSupport();
  expertTalkPage.inputFirstName();
  expertTalkPage.inputLastName();
  expertTalkPage.inputEmail();
  expertTalkPage.inputCompSite();
  expertTalkPage.inputRequest();
});
When("I click on the button Submit", () => {
  expertTalkPage.submitBtnClick();
});
Then("Validate the Hear about us warn message", () => {
  expertTalkPage.checkHearAboutUsMsg();
});
