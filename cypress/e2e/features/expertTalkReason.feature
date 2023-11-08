Feature: Expert talk request

  Background:
    Given I navigate to the Website
    When I click on the navigation button
    When I click the Contact Us link in navigation

  Scenario: Reserve a talk with an expert without reason selecting
    When I input all needed credentials without selecting a request reason
    When I click on the Submit button
    Then Validate the reason warn message