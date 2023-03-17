/// <reference types="Cypress" />

it("api test", ()=> {
    cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
        "name": "learn automamtion with cypress",
        "isbn": "bcdsss",
        "aisle": "22s7",
        "author": "Saboor"
    }).then( (res)=> {
        expect(res.body).to.have.property('ID', 'bcdsss22s7')
        expect(res.status).to.equal(200)
    })
})