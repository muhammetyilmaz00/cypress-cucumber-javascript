import { When, Then } from "cypress-cucumber-preprocessor/steps"
import { toolTip } from "../../cypress/integration/pageObjects/ToolTip"

When('I hover over the button "Hover me to see"', () => {
    toolTip.hoverOverButton()
})

Then('I see the message next to the button', () => {
    toolTip.checkHoverButtonMessage()
})

