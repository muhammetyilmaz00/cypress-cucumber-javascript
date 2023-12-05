export class ProgressBar {

    verifyProgressBar(percentage) {
        cy.get('.progress-bar').should('have.text', percentage)
    }

    clickStartButton() {
        cy.get('#startStopButton').click()
    }

    waitUntilResetButton() {
        cy.get('#resetButton', { timeout: 15000 }).should('be.visible')
    }

}

export const progressBar = new ProgressBar()