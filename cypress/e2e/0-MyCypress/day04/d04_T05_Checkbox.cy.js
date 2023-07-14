/// <reference types="Cypress" />

describe('Checkbox methodlari', () => {
    it('Checkbox Secimi', () => {
        
        cy.visit('https://the-internet.herokuapp.com/checkboxes')

        cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')//isaretledi ve isaretledigini dogruladi
        cy.wait(4000)

        cy.get('#checkboxes > :nth-child(3)').uncheck().should('not.be.checked')//isaretlemedi ve isaretlemedigini dogruladi

    });

    it('sirasina gora secme', () => {
        
        cy.visit('https://the-internet.herokuapp.com/checkboxes')

        cy.get("input[type='checkbox']").eq(1).uncheck().should('not.be.checked')
        cy.wait(4000)

        cy.get("input[type='checkbox']").first().check().should('be.checked') //first = eq(0)

    });

    it('Toplu Check', () => {

        cy.visit('https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb')
        //cy.get("input[type='checkbox']").check() tum checkbox'lari isaretler 
        //(hata verdi isaretlenen checkbox'lardan bazilari sayfayi yeniden yuklemeye neden oldugunda o anda siradaki elementi goremiyor)

        //cy.get("input[type='checkbox']").eq(11).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(16).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(24).check().should('be.checked')
        //cy.get("input[type='checkbox']").eq(35).check().should('be.checked')
        
    });

});