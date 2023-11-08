Feature: Expert talk Hear about us message

  Background:
    Given I navigate to the Website
    When I click on the navigation button
    When I click the Contact Us link in navigation

  Scenario: Reserve a talk with an expert without a Hear about us message
    When I input all needed credentials without a Hear about us message
    When I click on the button Submit
    Then Validate the Hear about us warn message