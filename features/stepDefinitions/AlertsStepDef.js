/// <reference types= "cypress" />

import { When, Then } from "cypress-cucumber-preprocessor/steps"
import { alertsPage } from "../../cypress/integration/pageObjects/Alerts"

When('I click to the confirm button', () => {
    alertsPage.clickConfirmButton()
})

When('I click to OK on the popup', () => {
    alertsPage.clickOkButton()
})

Then('I see alert confirmation message is {string}', button => {
    alertsPage.checkSelectedButton(button)
})

When('I click to the alert button', () => {
    alertsPage.clickAlertButton()
})

Then('I see alert is opened successfully', () => {
    alertsPage.checkAlertMessage()
})
