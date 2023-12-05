export class Droppable {

    drag_and_drop() {
        cy.get('#draggable').drag('#droppable', { force: true })
        cy.get('#droppable').trigger('dragend',{force:true})
        cy.wait(1000)
    }

    verifyTheBoxDropped() {
        cy.get('#droppable').should('have.text', 'Dropped!')
    }
}

export const droppable = new Droppable()
