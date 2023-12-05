@regression @textBox
Feature: Text Box Validation in Elements Page

  Background: Navigate to the Website
    Given I navigate to demoqa website

  Scenario Outline: Text Box
    When I click to "Elements" category
    And I click to "Text Box" in menu list
    And I enter "<name>" "<email>" "<currentAddress>" "<permanentAddress>" in text box
    And I click to Submit button
    Then I see the results as "<name>" "<email>" "<currentAddress>" "<permanentAddress>"

    Examples: 
      | name     | email              | currentAddress | permanentAddress |
      | Muhammet | muhammet@email.com | Leiden         | Leiden           |
