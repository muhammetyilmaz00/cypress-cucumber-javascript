/// <reference types="cypress-xpath" />

export class HomePage {

    navigateToHomePage() {
        cy.visit('/')
    }

    clickToCategory(category) {
        cy.contains(category).click()
    }

    clickToMenu(menu) {
        const loc = "//*[@class='menu-list']//span[contains(.,'" + menu + "')]"
        cy.xpath(loc).click()
    }

}

export const homePage = new HomePage()
