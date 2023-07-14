/// <reference types="Cypress" />

describe('iFrame', () => {

    //https://www.npmjs.com/package/cypress-iframe adresine git
    //Terminale npm install -D cypress-iframe komutunu yazdik
    //cypress>support>e2e.js' file'ina require('cypress-iframe'); ekledik
    //Bu satirla biz cy.frameLoaded ve cy.frame komutlarini kullanabilmemizi saglayacak

    it('iFrame test', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('#mce_0_ifr')
        cy.wait(2000)
        cy.iframe().find('p').clear()
        cy.wait(2000) //yapilan islemi gozle gorebilmek icin bu satiri ekliyoruz
        cy.iframe().find('p').type('Have nice day!')

        cy.get('.large-4 > div').should('contains.text','Elemental Selenium')
        cy.log('Sayfa girisi dogrulandı')
        cy.get('.large-4 > div').click()
        cy.screenshot()

    });

    

});