describe('DELETE', () => {

    it('', () => {
        cy.request({
            url:"https://dummy.restapiexample.com/api/v1/delete/5",
            method:'DELETE'
        }).then(response =>{
            expect(response.body.message).to.eq('Successfully! Record has been deleted')
        })
    });
});