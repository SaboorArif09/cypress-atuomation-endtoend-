/// <reference types="Cypress" />


describe('template spec', () => {
    it('passes', () => {
        cy.visit(Cypress.env("url")+'/AutomationPractice/')
        cy.get(".mouse-hover-content").invoke('show')
        cy.contains("Top").click()
        cy.url().should("include", "top")
        
        cy.contains("Reload").click({force:true})
        cy.url().should("include", "AutomationPractice")
        
    })
})