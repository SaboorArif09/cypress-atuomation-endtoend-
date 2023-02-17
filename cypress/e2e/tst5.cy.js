/// <reference types="Cypress" />


describe('template spec', () => {
    it('passes', () => {
        cy.visit(Cypress.env("url")+'/AutomationPractice/')
        cy.get(".table-display tr td:nth-child(2)").each(($e1, index) => {
            const txt= $e1.text()
            if(txt.includes("Python")){
                cy.get(".table-display tr td:nth-child(2)").eq(index).next().then( (price) => {
                    const pricetxt = price.text()
                    expect(pricetxt).to.eql("25")
                })
            }
        })
        
    })
})