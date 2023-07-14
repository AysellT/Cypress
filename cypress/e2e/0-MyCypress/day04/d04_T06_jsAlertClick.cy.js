/// <reference types="Cypress" />

describe('JS Alert Click', () => {

    it('Only Alerts', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get(':nth-child(1) > button').click()  //cypress default olarak tamam'a tiklar

        cy.get('#result').should('have.text','You successfully clicked an alert') //alert'i kabul ettigini onayladi

    });

    it('Confirm Alert', () => {
        
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get(':nth-child(2) > button').click() //default olarak ok'a tikladi aksi icin belirtmemiz gerekir

        cy.get('#result').should('have.text','You clicked: Ok')//alert'i kabul ettigini onayladi
        
    });

    it('Dissmis Alert', () => {
        
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)

        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm' , ()=>{   //on() fonksiyonu JQuery fonksiyonudur. Browser'da pencerelerin kontrolunu saglar
            return false
        } )
        cy.get('#result').should('have.text','You clicked: Cancel')
    });

    it.only('Prompt Alert', () => {
        
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)

        cy.get(':nth-child(3) > button').click()

        cy.window().then('$windowsElement' , ()=>{

            //cy.stub('$windowsElement','prompt').returns('Wise')

       })
    });

});