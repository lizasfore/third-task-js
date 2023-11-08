import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
// import signUpPage from "../../pages/signUpPage.js";
// import voiceApiPage from "../../pages/voiceApiPage";
// import careersPages from "../../pages/careersPages";
// import versusPage from "../../pages/versusPage";
import blogPage from "../../pages/blogPage";
// import pricingPage from "../../pages/pricingPage";

When("I click on Resources button in navigation", () => {
  homepage.clickNavResBtn();
});
When("I click on Blog link", () => {
  homepage.clickBlogBtn();
});
When("I search through the site", () => {
  blogPage.searchTheBlog();
});
Then("Validate the results accuracy", () => {
  blogPage.checkSerRes();
});
