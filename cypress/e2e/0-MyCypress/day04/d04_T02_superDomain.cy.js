/// <reference types="Cypress" />

describe('SuperDomain', () => {
    it('Ayni classda iki farkli visit', () => {
        
        cy.visit('https://amazon.com')

        cy.visit('https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb')

        // cy.visit('https://www.google.com')
        
    });

    it('Farkli adres', () => {

        cy.visit('https://google.com')
        
    });
});