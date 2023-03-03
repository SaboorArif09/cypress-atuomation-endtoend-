beforeEach( ()=> {
    cy.fixture('example.json').then((data) => {
        // this.data = data;
        globalThis.data = data;
        cy.visit(Cypress.env("url")+'/angularpractice/')
    })
})