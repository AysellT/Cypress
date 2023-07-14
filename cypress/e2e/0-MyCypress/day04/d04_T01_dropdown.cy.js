/// <reference types="Cypress" />

describe('Dropdown locate', () => {
    
    it('dropdown menu', () => {

        cy.visit('https://the-internet.herokuapp.com/dropdown') 
        
        cy.get('#dropdown').select('Option 1').should('have.value',('1'))//option1'i sectiginde degeri 1 olmali

        cy.get('#dropdown').select('Option 2').should('include.text','Option 2\n')//option2'yi sectiginde texti Option\n icermeli
                                                                                  //aldigim hatadan sonra \n ekledim

                                                                                    
    });

});