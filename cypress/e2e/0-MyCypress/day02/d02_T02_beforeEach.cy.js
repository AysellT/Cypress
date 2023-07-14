
describe('', () => {
    beforeEach(() => { // beforeEach her bir it blogundan yeni herbir testten once calisir
        cy.visit('https://www.google.com/')
    });
    
    it('title', () => {
        cy.title().should('eq','Google')
        cy.title().should('include','Google')
    });

    it('url', () => {
        cy.url().should('eq','google')
    });
});