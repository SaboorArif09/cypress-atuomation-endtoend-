class HomePage {

    getName(){
        return cy.get("input[name=name]:nth-child(2)")
    }

    getGender(){
        return cy.get("select")
    }

    getTwowayBinding(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getEditBox(){
        return cy.get("input[name=name]:nth-child(2)")
    }

    getEnterpreneur(){
        return cy.get('#inlineRadio3')
    }

    getShop(){
        return cy.get("a[href='/angularpractice/shop']")
    }
}

export default HomePage;