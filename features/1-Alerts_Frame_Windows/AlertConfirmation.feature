@regression @alerts @alertConfirmation
Feature: Alerts Validation

  Background: Navigate to the Website
    Given I navigate to demoqa website
    
  Scenario: Alert Confirmation
    When I click to "Alerts, Frame & Windows" category
    And I click to "Alerts" in menu list
    And I click to the confirm button
    And I click to OK on the popup
    Then I see alert confirmation message is "Ok"
