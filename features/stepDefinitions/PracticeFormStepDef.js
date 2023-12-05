import { When } from "cypress-cucumber-preprocessor/steps"
import { practiceForm } from "../../cypress/integration/pageObjects/PracticeForm"

When('I fill out the form with the parameters', (dataTable) => {
    practiceForm.fillOutTheForm(dataTable)
})

Then('I see the form result details as expected', (dataTable) => {
    practiceForm.checkForm(dataTable)
})