import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pages/homePage.js";
import signUpPage from "../../pages/signUpPage.js";
// import voiceApiPage from "../../tests/pages/voiceApiPage";
// import careersPages from "../../tests/pages/careersPages";
// import versusPage from "../../tests/pages/versusPage";
// import blogPage from "../../tests/pages/blogPage";
// import pricingPage from "../../tests/pages/pricingPage";
import expertTalkPage from "../../pages/expertTalkPage.js";

import { closeCookies } from "../../helpers/cookiesAccepter.js";

const pageM = {
  homepage: homepage,
  signUpPage: signUpPage,
};

Given("I navigate to the Website", () => {
  cy.visit("/");
  closeCookies();
});

When("I click on the navigation button", () => {
  homepage.clickOnNav();
});
When("I click the Contact Us link in navigation", () => {
  homepage.clickOnContactBtn();
});
