/// <reference types="Cypress" />


describe('template spec', () => {
    it('passes', () => {
        cy.visit(Cypress.env("url")+'/AutomationPractice/')
        cy.get("#opentab").then( (vst)=> {
            const url = vst.prop('href')
            cy.log(url)
            cy.visit(url)
            cy.url().should("include", "academy")
        })
    })
})