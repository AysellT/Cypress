/// <reference types="Cypress" />

describe('Hover over', () => {
    it('move to', () => {

        cy.visit('https://www.amazon.com')
        cy.wait(2500)

        cy.get('.icp-nav-link-inner > .nav-line-2').trigger('mouseover')//üzerine mouse ile gelindiğinde açılan menüyü açar
        cy.wait(4000)
        
        cy.get('#nav-flyout-icp > .nav-template > #icp-flyout-mkt-change > .nav-text > .icp-mkt-change-lnk').click()

        cy.get('.a-dropdown-prompt').click()
        cy.get('#icp-dropdown_18').click()
        cy.get('.a-button-input').click()

    });

    it.only('', () => {

        cy.visit('https://www.amazon.com')
        cy.wait(4000)

        cy.reload() //sayfayi yeniliyor
        cy.wait(4000)
        
        cy.reload(true) //sayfayi catch'den degil direk sifirdan acar

    });
});
