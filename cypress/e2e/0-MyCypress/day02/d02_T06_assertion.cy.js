//<reference types=”Cypress” />

describe('Assertion', () => {
    beforeEach('qualitydemy Login Test', () => {
            cy.visit('https://qa.qualitydemy.com/') //qualitydemy'e gitti
            cy.get('.cookieButton > a').click()     //cookies onayi verdi
    });

        //Assertion
        it('', () => {
        // 1) have-text
        cy.get('.btn-sign-in-simple').should('have.text','Log in') // acilan sayfada Login yazisi var mi
        });

        it.only('', () => {
        // 2) cy.url().should()
        cy.get('.btn-sign-in-simple').click()
        cy.url().should('include','login')  //login adresi login iceriyor mu
            });

        it.only('', () => {
        // 3) cy.title().should()
        cy.get('.btn-sign-in-simple').click()
        cy.title().should('eq','Login | QualityDemy') //login sayfa title istenilen degere esit mi
        });

        it.only('', () => {
        // 4) be visible
        cy.get('.text-14px').should('be.visible')
        });

        it.only('', () => {
        //5 include text
        cy.get('.btn-sign-in-simple').should('include.text','Log') //sayfa Log yazisi iceriyor mu
        });
        
        

        

        

        
    
});