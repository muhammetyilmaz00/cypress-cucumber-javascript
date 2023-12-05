@regression @alerts @simpleAlert
Feature: Alerts Validation

  Background: Navigate to the Website
    Given I navigate to demoqa website

  Scenario: Simple Alert
    When I click to "Alerts, Frame & Windows" category
    And I click to "Alerts" in menu list
    And I click to the alert button
    Then I see alert is opened successfully