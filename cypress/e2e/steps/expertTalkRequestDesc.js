import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
// import signUpPage from "../../pages/signUpPage.js";
// import voiceApiPage from "../../pages/voiceApiPage";
// import careersPages from "../../pages/careersPages";
// import versusPage from "../../pages/versusPage";
// import blogPage from "../../pages/blogPage";
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
