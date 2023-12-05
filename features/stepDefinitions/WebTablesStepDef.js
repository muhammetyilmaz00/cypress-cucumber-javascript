import { When } from "cypress-cucumber-preprocessor/steps"
import { webTables } from "../../cypress/integration/pageObjects/WebTables"

When('I click to Add button on the Web Tables page', () => {
    webTables.clickAddButton()
})

When('I fill out the registration from', (dataTable) => {
    webTables.fillOutTheRegistrationForm(dataTable)
})

Then('I verify the form for the expected parameters', (dataTable) => {
    webTables.verifyTheForm(dataTable)
})

When('I save the details of {} row record', (rowIndex) => {
    webTables.saveDetails(rowIndex)
})

When('I click on the {} row edit record button on the Web Tables page', (rowIndex) => {
    webTables.clickOnEditButton(rowIndex)
})

When('I edit the record with the parameters', (dataTable) => {
    webTables.editFirstNameAndLastName(dataTable)
})

Then('I check the first name and last name as expected parameters', (dataTable) => {
    webTables.checkFirstNameAndLastName(dataTable)
})

Then('I check that the stored details of the {} record have not changed', (rowIndex) => {
    webTables.checkStoredDetails(rowIndex)
})