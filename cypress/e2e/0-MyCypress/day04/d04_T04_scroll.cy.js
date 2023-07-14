/// <reference types="Cypress" />

describe('Scroll islemleri', () => {

    it('sayfayi belirli bir yere kaydirma', () => {

        cy.visit('https://tripandway.com/')

        cy.get('.portfolio-page > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView({duration:2000})
        //Destination'a kadar gelir locate'i alinan element sayfanin en ustunde kalir
        cy.wait(4000)
        cy.get('.featured-package > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView()
        //Fearured Package'e kadar geldi

    });

    it('sayfayi istedigimiz koordinata kaydirma', () => {

        cy.visit('https://tripandway.com/')
        cy.get('.col > .main-headline > .headline > h2').scrollIntoView()//sayfanin en altindan bir element secip o elemente kadar kaydirdi
        cy.wait(4000)
        cy.scrollTo(0,1)//sayfanin en basina geri donduk //(0,0) kabul etmiyor

        cy.get('.blog-area > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView()
        cy.wait(3000)

        cy.scrollTo(0,500)//asagi inmek icin
        cy.wait(3000)

        cy.scrollTo(0,-500)//yukari cikmak icin

    });

    it('koordinata gitme', () => {
        
        cy.visit('https://tripandway.com/')
        cy.get('.team-area > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView({top:500,left:0})

    });
});