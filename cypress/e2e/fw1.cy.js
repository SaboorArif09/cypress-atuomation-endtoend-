/// <reference types="Cypress" />

import HomePage from "../support/PageObjectModel/HomePage"
import ProductPage from "../support/PageObjectModel/ProductPage"


describe('My framework spec', () => {
    const homePage=new HomePage
    const productPage=new ProductPage
    beforeEach( () => {
        cy.fixture('example.json').then((data) => {
            // this.data = data;
            globalThis.data = data;
            cy.visit(Cypress.env("url")+'/angularpractice/')
        })
    })
        it('passes', () => {
            homePage.getName().type(data.name)
            homePage.getGender().select(data.gender)
            homePage.getTwowayBinding().should("have.value", data.name)
            homePage.getEditBox().should("have.attr", "minlength", 2)
            homePage.getEnterpreneur().should("be.disabled")
            
        })
        it.only("verify", () => {
            homePage.getShop().click()

            data.productName.forEach((element) => {
                cy.selectProduct(element)
            })
            productPage.getCheckoutButton().click()

            var sum=0;
            cy.get("tr td:nth-child(4) strong").each(($el) => {
                const amount = $el.text()
                var result = amount.split(" ")
                result = result[1].trim()
                sum = Number(sum)+Number(result)
            }).then(() => {
                cy.log(sum)
            })
            cy.get("h3 strong").then( ($e1) => {
                const totalAmount = $e1.text()
                var res = totalAmount.split(" ")
                var grandTotal = res[1].trim()  
                expect(Number(grandTotal)).to.equal(sum)
            })
            
            
            productPage.getCheckoutBtn().click()
            productPage.getCountry().type("pak")
            productPage.getCountryValue().click()
            productPage.getAgreeCheckbox().click({force:true})
            productPage.getPurchasebtn().click()
            productPage.alertValidation().then((text) => {
                const txt = text.text()
                expect(txt.includes('Success')).to.be.true
            })
            
        })
})
