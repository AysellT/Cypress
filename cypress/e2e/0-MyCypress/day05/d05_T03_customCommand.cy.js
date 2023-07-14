/// <reference types="Cypress" />

describe('Custom Commands', () => {
    it.skip('Pozitif login testi 1', () => {

        cy.visit('https://qa.qualitydemy.com/')

        cy.get('.btn-sign-in-simple').click()

        cy.get('#login-email').type('mb@babayigit.net')
        cy.get('#login-password').type('M123456.b{enter}')

    });

    it.skip('komutla login testi', () => {

        cy.QualityDemyLogin('mb@babayigit.net','M123456.b{enter}')

    });

    it('komutla negatif login testi', () => {
        
        cy.QualityDemyLogin('mb@babayigit.net','M123456{enter}')

    });

});