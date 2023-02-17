/// <reference types="Cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit(Cypress.env("url")+'/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    //cy.wait(2000)
    cy.get(".product:visible").should('have.length', 4)
    cy.get(".products").as("productlocator")
    cy.get("@productlocator").find(".product").should('have.length', 4)
    cy.get("@productlocator").find(".product").eq(1).contains("ADD TO CART").click()
    cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click().then(() => {
      console.log('sf')
    })
    
    cy.get(".products").find(".product").each(($el, index, $list) => {
      const vegText = $el.find("h4.product-name").text()
      if(vegText.includes('Cashews')){
        cy.wrap($el).find('button').click()
      }
    })

    cy.get(".brand").should('have.text', "GREENKART")
    cy.get(".brand").then( (logoelement)=> {
      cy.log(logoelement.text())
    })
    // const logo = cy.get(".brand")
    // cy.log(cy.get(".brand").text())
    // cy.log(logo.text())
  })
})