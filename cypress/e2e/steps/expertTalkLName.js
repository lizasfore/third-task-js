import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
// import signUpPage from "../../pages/signUpPage.js";
// import voiceApiPage from "../../pages/voiceApiPage";
// import careersPages from "../../pages/careersPages";
// import versusPage from "../../pages/versusPage";
// import blogPage from "../../pages/blogPage";
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
