
import { When } from "cypress-cucumber-preprocessor/steps"

When('I verify the broken image', () => {
    cy.get('[src="/images/Toolsqa_1.jpg"]')
        .should('be.visible')
        .and($img => expect($img[0].naturalWidth).to.eq(0))
        .and($img => expect($img[0].naturalHeight).to.eq(0))

})