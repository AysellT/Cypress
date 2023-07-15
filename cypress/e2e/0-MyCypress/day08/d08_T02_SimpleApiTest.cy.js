describe('Api assertion', () => {
    
    it('Api Assertion', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments')
        .its('headers').its('date').should('include','Fri, 14 Jul 2023')
    });

    it('Api Assertion2', () => {
        cy.request({
            url: 'https://jsonplaceholder.cypress.io/comments',
            method: 'GET'
        }).its(headers).its('date').should('include','Fri, 14 Jul 2023')
    });

});