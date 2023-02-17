/// <reference types="Cypress" />

describe('template spec', () => {
    it('passes', () => {
        cy.visit(Cypress.env("url")+'/AutomationPractice/')
        cy.get("[name=enter-name]").type("Saboor")
        cy.get("#alertbtn").click()
        cy.get("[name=enter-name]").type("Saboor")
        cy.get("#confirmbtn").click()

        cy.on("window:alert", (str) => {
            expect(str).to.eql("Hello Saboor, share this practice page and share your knowledge")
        })
        cy.on("window:confirm", (str) => {
            expect(str).to.eql("Hello Saboor, Are you sure you want to confirm?")
        })

        cy.get("#opentab").invoke("removeAttr", "target").click()
        cy.url().should("include", "rahulshettyacademy")

        cy.go("back")
    })
})