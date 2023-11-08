Feature: Expert talk request description

  Background:
    Given I navigate to the Website
    When I click on the navigation button
    When I click the Contact Us link in navigation

  Scenario: Reserve a talk with an expert without request description
    When I input all needed credentials without describing a request
    When I click the Submit button
    Then Validate the request description warn message