import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import expertTalkPage from "../../pages/expertTalkPage.js";

When("I input all needed credentials without describing a request", () => {
  expertTalkPage.selectReasonSupport();
  expertTalkPage.inputFirstName();
  expertTalkPage.inputLastName();
  expertTalkPage.inputEmail();
  expertTalkPage.inputCompSite();
  expertTalkPage.inputHearAboutMsg();
});
When("I click the Submit button", () => {
  expertTalkPage.submitBtnClick();
});
Then("Validate the request description warn message", () => {
  expertTalkPage.checkRequestDescMsg();
});
