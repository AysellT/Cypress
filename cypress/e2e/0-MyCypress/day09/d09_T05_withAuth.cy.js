describe('Test with auth.', () => {
    /*
    {
    "firstname": "Jane",
    "lastname": "Doe",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
                   },
    "additionalneeds": "Extra pillows please"
    }
    */

    it('Test 01-GET and Assert', () => {
         cy.request({
            url:'https://restful-booker.herokuapp.com/booking/78',
            method:"GET",
            auth:
            {
                "username" : "admin",
                "password" : "password123"
            },
            token:"abc123"
         }).then(response => {
            expect(response.body.lastname).to.eq("Doe")
         })
    });

    it.only('Test 02-POST and Assert', () => {
        cy.request({
            url:"https://restful-booker.herokuapp.com/booking",
            method:"POST",
            token:"abc123",
            body:{
                "firstname": "Nimet",
                "lastname": "Kaya",
                "totalprice": 2000,
                "depositpaid": true,
                "bookingdates": {
                      "checkin": "2024-01-01",
                      "checkout": "2024-01-07"
                   },
                "additionalneeds": "Breakfast"
            }
        }).then(response =>{
            expect(response.body.booking.firstname).to.eq("Nimet")
            expect(response.body.booking.bookingdates.checkin).to.eq("2024-01-01")
            expect(response.body.booking.depositpaid).to.eq(true)
        })
        
    });

    
});