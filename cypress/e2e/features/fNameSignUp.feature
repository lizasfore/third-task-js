Feature: First name sign up

  Background:
    Given I navigate to the Website

  Scenario: Sign up with invalid First name
    When I input email last name password and invalid first name
    When I check Terms and Conditions checkbox
    When User clicks on Sign up button
    Then Validate the first name warning message