/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

import "cypress-iframe"


describe('Frame test', () => {
    it('passes', () => {
        cy.visit(Cypress.env("url")+'/AutomationPractice/')
        // cy.frameLoaded("#courses-iframe")
        // cy.iframe().find("a[href='mentorship']").eq("0").click()
        // cy.iframe().find(".pricing-title").should("have.length", 2)
        
        cy.get("#courses-iframe").then((iframe) => {
            const ifrmebody=iframe.contents().find('body')
            cy.wrap(ifrmebody).as('iframe')
        })
        cy.get("@iframe").find("a[href='lifetime-access']").eq(1).click().as('accessplan')
        cy.get("@accessplan").should("have.text", 'All Access plan')
       
    })
})

























