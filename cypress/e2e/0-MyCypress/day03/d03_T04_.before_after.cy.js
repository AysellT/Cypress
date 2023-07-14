//Before - After Islevleri

describe('', () => {

    before(() => {
        cy.visit('https://www.google.com/') //Tum testlerden(tum it bloklari) once bir kere calisir
    });

    after(() => {       //Tum testler (tum it bloklari) tamamlandi
        cy.log('Tum testler tamamlandi')
    });

    beforeEach(() => {   //her bir testten (it blogu) once bir kere calisir
        cy.log('Yeni bir test basliyor')
    });

    
    it('google search', () => {
        cy.get('#APjFqb').type('book thief{enter}')
        
    });
    
    

    afterEach(() => {    //her bir testten (it blogu) sonra calisir
        cy.log('Bir test tamamlandi. Digerine geciliyor')
    });



});