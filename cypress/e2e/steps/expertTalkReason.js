import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
// import signUpPage from "../../pages/signUpPage.js";
// import voiceApiPage from "../../pages/voiceApiPage";
// import careersPages from "../../pages/careersPages";
// import versusPage from "../../pages/versusPage";
// import blogPage from "../../pages/blogPage";
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
