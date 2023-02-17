class ProductPage{
    getCheckoutButton(){
        return cy.get(".nav-link.btn-primary")
    }

    getCheckoutBtn(){
        return  cy.contains("Checkout")
    }

    getCountry(){
        return cy.get("#country")
    }
    getCountryValue(){
        return cy.get(".suggestions ul li a", {timeout: 5000})
    }
    getAgreeCheckbox(){
        return cy.get("#checkbox2")

    }
    getPurchasebtn(){
        return cy.get("input[value='Purchase']")
    }
    alertValidation(){
        return cy.get(".alert")
    }
}
export default ProductPage;