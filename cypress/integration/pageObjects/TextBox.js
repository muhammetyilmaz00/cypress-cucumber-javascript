export class TextBox {

    inputFields(name, email, currentAddress, permanentAddress) {
        cy.wait(1000)
        cy.get('#userName').clear().type(name)
        cy.get('#userEmail').clear().type(email)
        cy.get('#currentAddress').clear().type(currentAddress)
        cy.get('#permanentAddress').clear().type(permanentAddress)
    }

    clickSubmitButton() {
        cy.get('#submit').click({ force: true })
    }

    checkResults(name, email, currentAddress, permanentAddress) {
        cy.wait(1000)
        cy.get('#name').should('have.text', 'Name:' + name)
        cy.get('#email').should('have.text', 'Email:' + email)
        cy.get('#output #currentAddress').should('have.text', 'Current Address :' + currentAddress + ' ')
        cy.get('#output #permanentAddress').should('have.text', 'Permananet Address :' + permanentAddress)
    }

}

export const textBoxPage = new TextBox()