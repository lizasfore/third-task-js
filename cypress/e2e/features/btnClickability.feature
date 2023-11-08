Feature: Versus page detail button clickability

  Background:
    Given I navigate to the Website

  Scenario: Click details button to check its functionality
    When I click on TELNYX VS. AMAZON S3 link
    When I scroll to the details button
    Then Validate the details button is enabled and click on it