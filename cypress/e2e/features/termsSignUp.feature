Feature: Terms sign up

  Background:
    Given I navigate to the Website

  Scenario: Sign up with terms and conditions unchecked
    When I input email first name last name and password
    When User click the Sign up button
    Then Validate the terms warn message