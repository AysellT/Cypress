describe('POST methodu', () => {
    const requestUrl = 'https://jsonplaceholder.cypress.io/comments'

    it('Test 01', () => {
        cy.request('POST',requestUrl,{
            userId:501,
            title:"Cypress Test Operation",
            body:"JS Based",
            name:"First Name"
        }).should((response) => {
            expect(response.body.name).to.eq("First Name")
            expect(response.body.title).to.eq('Cypress Test Operation')
            expect(response.body.body).to.eq('JS Based')
        })
    });


});