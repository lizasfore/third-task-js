Feature: Last name sign up

  Background:
    Given I navigate to the Website

  Scenario: Sign up with invalid Last name
    When I input email first name password and invalid last name
    When I check Terms and Conditions box
    When User pushes the Sign up button
    Then Validate the last name warning message