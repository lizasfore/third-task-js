import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
// import signUpPage from "../../pages/signUpPage.js";
// import voiceApiPage from "../../pages/voiceApiPage";
import careersPages from "../../pages/careersPages";
// import versusPage from "../../pages/versusPage";
// import blogPage from "../../pages/blogPage";
// import pricingPage from "../../pages/pricingPage";

When("I click on Careers link", () => {
  homepage.clickOnCareersBtn();
});
When("I click on listed vacancy link", () => {
  careersPages.clickOnVacancyListed();
});
Then("Validate the URL not containing the previous page address", () => {
  careersPages.checkCorrectRedirecting();
});
