Feature: Search result check

  Background:
    Given I navigate to the Website
    When I click on the navigation button

  Scenario: Search through the site and check results accuracy
    When I click on Resources button in navigation
    When I click on Blog link
    When I search through the site
    Then Validate the results accuracy