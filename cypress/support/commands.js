// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('selectProduct', (productName) => { 
    cy.get("h4.card-title").each(($e1, index) => {
        const txt =$e1.text()
        if(txt.includes(productName)){
        cy.get(".btn.btn-info").eq(index).click()
        }
    })
 })

 Cypress.Commands.add("loginApi", ()=> {
    cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login", {
        "userEmail":"rahulshetty@gmail.com",
        "userPassword":"Iamking@00"
    }).then( (response)=> {
        expect(response.status).to.equal(200)
        Cypress.env('token', response.body.token)
    })
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })