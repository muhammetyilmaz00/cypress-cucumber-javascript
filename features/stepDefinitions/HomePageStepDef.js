/// <reference types= "cypress" />

import { Given, When } from "cypress-cucumber-preprocessor/steps"
import { homePage } from "../../cypress/integration/pageObjects/HomePage"


Given('I navigate to demoqa website', () => {
    homePage.navigateToHomePage();
});

When('I click to {string} category', category => {
    homePage.clickToCategory(category)
});

When('I click to {string} in menu list', menu => {
    homePage.clickToMenu(menu)
});