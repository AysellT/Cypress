describe('JsonPlaceHolder Assertion', () => {
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
});