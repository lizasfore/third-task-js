import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import expertTalkPage from "../../pages/expertTalkPage.js";

When("I input all needed credentials without entering the last name", () => {
  expertTalkPage.selectReasonSupport();
  expertTalkPage.inputFirstName();
  expertTalkPage.inputEmail();
  expertTalkPage.inputCompSite();
  expertTalkPage.inputRequest();
  expertTalkPage.inputHearAboutMsg();
});
When("I click on Submit button", () => {
  expertTalkPage.submitBtnClick();
});
Then("Validate the last name warn message", () => {
  expertTalkPage.checkLNameMsg();
});
