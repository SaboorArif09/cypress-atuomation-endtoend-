/// <reference types="Cypress" />

describe('template spec', () => {
    it('passes', () => {
        cy.visit(Cypress.env("url")+'/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get(".products").as("productlocator")
        cy.get("@productlocator").find(".product").should('have.length', 4)
        
        cy.get(".products").find(".product").each(($el, index, $list) => {
            const vegText = $el.find("h4.product-name").text()
            if(vegText.includes('Cashews')){
              cy.wrap($el).find('button').click()
            }
        })
        cy.get("img[alt='Cart']").click()
        cy.contains("PROCEED TO CHECKOUT").click()
        cy.get(".quantity").should("have.text", 1)
        cy.get(".discountAmt").should("have.text", 650)
        cy.contains("Place Order").click()
        

    })
})