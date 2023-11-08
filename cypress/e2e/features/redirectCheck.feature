Feature: Redirect check

  Background:
    Given I navigate to the Website

  Scenario: Choose vacancy and check redirecting
    When I click on Careers link
    When I click on listed vacancy link
    Then Validate the URL not containing the previous page address