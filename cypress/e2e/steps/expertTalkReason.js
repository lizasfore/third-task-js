import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import expertTalkPage from "../../pages/expertTalkPage.js";

When(
  "I input all needed credentials without selecting a request reason",
  () => {
    expertTalkPage.inputFirstName();
    expertTalkPage.inputLastName();
    expertTalkPage.inputEmail();
    expertTalkPage.inputCompSite();
    expertTalkPage.inputRequest();
    expertTalkPage.inputHearAboutMsg();
  }
);
When("I click on the Submit button", () => {
  expertTalkPage.submitBtnClick();
});
Then("Validate the reason warn message", () => {
  expertTalkPage.checkRsnWarnMsg();
});
