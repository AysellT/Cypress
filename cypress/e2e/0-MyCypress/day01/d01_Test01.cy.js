
describe('Temel Cypress Komutlari', () => {
   
    it.only('cy.visit komutu', () => {
        cy.visit('/') // base url tanimlandiysa
        //cy.visit('https://www.amazon.com') //baseurl tanimli degilse
    
    });

    it.skip('cy.visit komutu.2', () => {
        cy.visit('/about-us')
    });

    it.skip('cy.title komutu', () => { //skip komutu bu testin es gecilmesini saglar
        cy.visit('/') //baseurl adresine gider
        cy.title().should('eq','Wise Quarter Course – Deliver more than expected') //title icin tam esitlik durumudur
        cy.title().should('include','expected') // verilen sring icerme durumu
        cy.title().should('contains','Deliver') //
    });

   it.only('cy.url ve cy.location komutu', () => { //only komutu ise sadece o testin calismasina neden olur
    cy.visit('/')
    cy.url().should('eq','https://wisequarter.com/') //url tam esitlik durumunu kontrol eder
    cy.url().should('contains','wisequarter') //url string icerme durumu
    
    cy.location('pathname').should('eq','/about-us') //pathname'in about-us oldugunu dogrular


   });
     
});