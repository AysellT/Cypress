describe('Create POST', () => {

    it('TEST', () => {
        cy.request({
            url : 'https://dummy.restapiexample.com/api/v1/create',
            method  : 'POST',
            body : {"name":"Aysel","age":"30","salary":"4000$"}
        }).then((response=>{
            expect(response.body.message).to.eq('Successfully! Record has been added.')
            expect(response.body.name).to.eq("Aysel")
        }))
    });
});