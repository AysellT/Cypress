
describe('', () => {
    
    beforeEach(() => {
        cy.visit('/')
    });
    
    it('google search', () => {
        cy.get('#APjFqb').type('book thief{enter}')
        
    });

    it('google search2', () => {
        cy.get('#APjFqb').type('the help{enter}')
    });
});






