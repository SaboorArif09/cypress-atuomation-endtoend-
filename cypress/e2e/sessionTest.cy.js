/// <reference types="Cypress" />

import neatCSV from 'neat-csv';
let ProductName;
let CSVInvoiceNumber;
let txt;
it("Set JWT Token to login through local storage", ()=> {
    cy.loginApi().then( ()=> {
        cy.visit("https://rahulshettyacademy.com/client", {
            onBeforeLoad: (window)=> {
                window.localStorage.setItem('token', Cypress.env('token'))
            }
        })
    })
    cy.get(".card-body b").eq(3).then((name)=> {
        ProductName = name.text()
    })
    cy.get(".card-body button:last-of-type").eq(3).click()
    cy.get("[routerlink*='cart']").click()
    // cy.get(".prodTotal.cartSection p").should('have.text', '$ 231500')
    cy.contains("Checkout").click()
    cy.get("[placeholder*='Country']").type('pa')
    cy.get(".ta-results button").each(($el) => {
        const txt = $el.text()
        if(txt.includes('Pakistan')){
            cy.wrap($el).click()
        }
    })
    cy.get(".action__submit").click()
    cy.wait(2000)
    cy.get(".btn-primary").click()

    cy.get("label[routerlink$='myorders']").click()
    cy.get('tbody th').each(($it,index)=> {
        txt = $it.text()
        if(txt.includes(CSVInvoiceNumber)) {
            cy.wrap($it).find(txt)
            
        }
    })

    cy.readFile(Cypress.config("fileServerFolder")+'/cypress/downloads/order-invoice_rahulshetty.csv').then(async (text)=> {
        const csv = await neatCSV(text)
        console.log(csv)
        const CSVProductName = csv[0]["Product Name"]
        expect(ProductName).to.eq(CSVProductName)
        CSVInvoiceNumber = csv[0]["Invoice Number"]
        expect(txt).to.eql(CSVInvoiceNumber)
    })
})