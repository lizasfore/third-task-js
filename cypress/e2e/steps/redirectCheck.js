import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
import careersPages from "../../pages/careersPages";

When("I click on Careers link", () => {
  homepage.clickOnCareersBtn();
});
When("I click on listed vacancy link", () => {
  careersPages.clickOnVacancyListed();
});
Then("Validate the URL not containing the previous page address", () => {
  careersPages.checkCorrectRedirecting();
});
