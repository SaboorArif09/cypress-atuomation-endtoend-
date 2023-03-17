/// <reference types="Cypress" />

describe("Api mocking", ()=> {
    
    beforeEach("", ()=> {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
    })


it("Api response mocking", ()=> {

    cy.intercept({
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
    },
    {
        statusCode: 200,
        body: [{
            "book_name":"RobotFramework",
            "isbn":"984353",
            "aisle":"982053"
        }]
    }).as("mokeresponse")
    cy.get('.btn.btn-primary').click()
    cy.wait("@mokeresponse").then( ({request, response}) => {
        cy.get('tr').should("have.length", response.body.length + 1)
    })
    cy.get("P").should("have.text", "Oops only 1 Book available")

})

it.only("Api request mocking", ()=> {
    cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req)=> {
        req.url= 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
        req.continue( (res)=> {
            expect(res.statusCode).to.equal(404)
        })
    }).as("mokerequest")
    cy.get('.btn.btn-primary').click()
    cy.wait("@mokerequest")
})

})