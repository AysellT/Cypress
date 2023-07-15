describe('Dummy Assertion', () => {

    /*
    {
      "id": 1,
      "employee_name": "Tiger Nixon",
      "employee_salary": 320800,
      "employee_age": 61,
      "profile_image": ""
    }
    */

    it('Dummy Assertion', () => {
        cy.request('https://dummy.restapiexample.com/api/v1/employees').should((response=>{
          assert.equal(response.body.data[13].id,14)
          assert.equal(response.body.data[13].employee_age,43)
          assert.equal(response.body.data[13].employee_name,'Haley Kennedy')
        }))
    });
});