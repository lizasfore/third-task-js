Feature: See Plan button scrolling into page part

  Background:
    Given I navigate to the Website
    When I click on the navigation button

  Scenario: The See Plan button correct working
    When I click on Pricing button in navigation
    When I click on Messaging API
    When I click on the See Plan button
    Then Validate the Volume Pricing page part visibility