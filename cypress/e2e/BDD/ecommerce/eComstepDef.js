/// <reference types="Cypress" />
import { Given,When,Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../support/PageObjectModel/HomePage";
import ProductPage from "../../../support/PageObjectModel/ProductPage";

const homePage=new HomePage
const productPage=new ProductPage
let name

Given('I open ecommerce page', ()=> {
    cy.visit(Cypress.env("url")+'/angularpractice/')
})

When('I add items to cart', ()=> {
    homePage.getShop().click()

            data.productName.forEach((element) => {
                cy.selectProduct(element)
            })
            productPage.getCheckoutButton().click()
})

When('Validate the total price', ()=> {
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
})

Then('Select the country submit and verify Thankyou', ()=> {
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

When('I fill the form details', (dataTable)=> {
    name = dataTable.rawTable[1][0]
    homePage.getName().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('Validate the form behaviour', ()=> {
    homePage.getTwowayBinding().should("have.value", name)
    homePage.getEditBox().should("have.attr", "minlength", 2)
    homePage.getEnterpreneur().should("be.disabled")
})

Then('Select the shop page', ()=> {
    homePage.getShop().click()
})