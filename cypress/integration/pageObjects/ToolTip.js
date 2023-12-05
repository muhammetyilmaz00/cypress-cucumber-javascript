export class ToolTip {

    hoverOverButton() {
        cy.get("#toolTipButton").trigger("mouseover");
    }

    checkHoverButtonMessage() {
        cy.get('.tooltip-inner').should('have.text', 'You hovered over the Button')
    }

}

export const toolTip = new ToolTip()