export class Alerts {

    clickConfirmButton(){
        cy.get('#confirmButton').click()
    }

    clickOkButton(){
        cy.on('window:alert',(str) =>{
            expect(str).to.equal('Do you confirm action?')
        })

        cy.on('window:confirm',()=>true)
    }

    checkSelectedButton(button){
        cy.get('#confirmResult').should('have.text','You selected '+button)
    }

    clickAlertButton(){
        cy.get('#alertButton').click()
    }

    checkAlertMessage(){
        cy.on('window:alert',(str) =>{
            expect(str).to.equal('You clicked a button')
        })

        cy.on('window:confirm',()=>true)
    }
    
    checkUrl(url){
        cy.wait(1000)
        cy.url().should('equal', url)
    }

}

export const alertsPage = new Alerts()