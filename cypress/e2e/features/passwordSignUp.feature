Feature: Password sign up

  Background:
    Given I navigate to the Website

  Scenario: Sign up with invalid Password
    When I input email first name last name and invalid password
    When I tick Terms and Conditions box
    When User push the Sign up button
    Then Validate the password warn message