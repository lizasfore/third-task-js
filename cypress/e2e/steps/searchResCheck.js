import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
import blogPage from "../../pages/blogPage";

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
