import { When, Then } from "cypress-cucumber-preprocessor/steps"
import { textBoxPage } from "../../cypress/integration/pageObjects/TextBox"

When('I enter {string} {string} {string} {string} in text box', (name, email, currentAddress, permanentAddress) => {
    textBoxPage.inputFields(name, email, currentAddress, permanentAddress)
})

When('I click to Submit button', () => {
    textBoxPage.clickSubmitButton()
})

Then('I see the results as {string} {string} {string} {string}', (name, email, currentAddress, permanentAddress) => {
    textBoxPage.checkResults(name, email, currentAddress, permanentAddress)
})