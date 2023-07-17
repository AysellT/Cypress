describe('Expect Test', () => {
    const requestUrl = 'https://jsonplaceholder.cypress.io/comments'

    /*
    {
    "postId": 1,
    "id": 5,
    "name": "vero eaque aliquid doloribus et culpa",
    "email": "Hayden@althea.biz",
    "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    }
    */

    it('JsonPlaceHolder testi', () => {
        cy.request(requestUrl).should((response =>{
            assert.equal(response.body[4].id,5)
            assert.equal(response.body[4].email,'Hayden@althea.biz')
            assert.equal(response.body[4].name,'vero eaque aliquid doloribus et culpa')
        }))
    });
    
    it.skip('Test 01', () => {
        cy.request(requestUrl).should((response) => {
            expect(response.status).to.equal(200)
            expect(response.body[202].email).to.equal('Bonita@karl.biz')
            expect(response.body[202].id).to.equal(203)
        })
    });

    it.only('Test 02', () => {
        cy.request({
            url:requestUrl,
            merhod:'GET'
        }).should((response)=>{
            expect(response.body[206].postId).to.equal(42)
        })
    });
});