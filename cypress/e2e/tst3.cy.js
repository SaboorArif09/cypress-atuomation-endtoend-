/// <reference types="Cypress" />

describe('template spec', () => {
    it('passes', () => {
        cy.visit(Cypress.env("url")+'/AutomationPractice/')
        cy.get("input[value='radio2']").check().should("be.checked")

        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value", 'option1')
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
        cy.get("input[type=checkbox]").check(['option2', 'option3'])
        
        cy.get('select').select('option2').should("have.value", 'option2')
        cy.get("#autocomplete").type("pa")
        cy.get(".ui-menu-item div").each(($el) => {
            if($el.text() === 'Pakistan'){
                cy.wrap($el).click()
            }
        })
        cy.get("#autocomplete").should("have.value", 'Pakistan')
        
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should("not.be.visible")
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should("be.visible")

    })
})