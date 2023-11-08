Feature: URL tag check

  Background:
    Given I navigate to the Website
    When I click on the navigation button

  Scenario: Enter Voice API page and check the URL
    When I click on Products button in navigation
    When I click on Voice API link
    Then Validate the URL containing the Voice API tag