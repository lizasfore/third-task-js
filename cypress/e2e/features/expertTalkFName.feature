Feature: Expert talk first name

  Background:
    Given I navigate to the Website
    When I click on the navigation button
    When I click the Contact Us link in navigation

  Scenario: Reserve a talk with an expert without entering the first name
    When I input all needed credentials without entering the first name
    When I click Submit button
    Then Validate the first name warn message