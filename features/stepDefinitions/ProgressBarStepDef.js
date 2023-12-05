import { When } from "cypress-cucumber-preprocessor/steps"
import { progressBar } from "../../cypress/integration/pageObjects/ProgressBar"

When('I verify the progress is {}', (percentage) => {
    progressBar.verifyProgressBar(percentage)
})

When('I click to Start button on Progress Bar page', () => {
    progressBar.clickStartButton()
})

When('I wait until Reset button appairs', () => {
    progressBar.waitUntilResetButton()
})