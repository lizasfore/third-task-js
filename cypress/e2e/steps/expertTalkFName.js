import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
// import signUpPage from "../../pages/signUpPage.js";
// import voiceApiPage from "../../pages/voiceApiPage";
// import careersPages from "../../pages/careersPages";
// import versusPage from "../../pages/versusPage";
// import blogPage from "../../pages/blogPage";
import expertTalkPage from "../../pages/expertTalkPage.js";

When("I input all needed credentials without entering the first name", () => {
  expertTalkPage.selectReasonSupport();
  expertTalkPage.inputLastName();
  expertTalkPage.inputEmail();
  expertTalkPage.inputCompSite();
  expertTalkPage.inputRequest();
  expertTalkPage.inputHearAboutMsg();
});
When("I click Submit button", () => {
  expertTalkPage.submitBtnClick();
});
Then("Validate the first name warn message", () => {
  expertTalkPage.checkFNameMsg();
});
