Feature: Expert talk last name

  Background:
    Given I navigate to the Website
    When I click on the navigation button
    When I click the Contact Us link in navigation

  Scenario: Reserve a talk with an expert without entering the last name
    When I input all needed credentials without entering the last name
    When I click on Submit button
    Then Validate the last name warn message