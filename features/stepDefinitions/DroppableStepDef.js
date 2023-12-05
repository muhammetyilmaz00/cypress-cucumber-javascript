import { When,Then } from "cypress-cucumber-preprocessor/steps"
import { droppable } from "../../cypress/integration/pageObjects/Droppable"

When('I drag the box and drop it on the other box',()=>{
    droppable.drag_and_drop()
})

Then('I verify the box has dropped',()=>{
    droppable.verifyTheBoxDropped()
})