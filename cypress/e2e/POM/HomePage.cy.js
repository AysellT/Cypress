class HomePage{

    getVisit(){
        return cy.visit('https://qa.qualitydemy.com/')
    }

    getLoginlink(){
      return  cy.get('.btn-sign-in-simple').click()
    }

}
export default HomePage