Feature: Email sign up

  Background:
    Given I navigate to the Website

  Scenario: Sign up with invalid Email
    When I enter first name last name password and invalid email
    When I tick Terms and Conditions checkbox
    When User click on Sign up button
    Then Validate the email warn message