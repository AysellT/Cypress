
describe('Json ile Login testi', () => {
    
    before(function () {
        
        cy.fixture('d07_qulitydemy').then(function(data){

            this.data = data

        })

    });
    
    
    it('Json test', function()  {

        cy.visit(this.data.url)
        cy.contains('log in',{matchCase:false}).click()

    });

});