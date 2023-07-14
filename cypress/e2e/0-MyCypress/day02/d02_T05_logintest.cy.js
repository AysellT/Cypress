
describe('Login testi', () => {
    
    it('qualitydemy login testi', () => {
        cy.visit('https://qa.qualitydemy.com/')
        //login testi yapılacak siteye gitti [ seleniumdaki get()]

        cy.get('.cookieButton > a').click()
        //cookies onayı verdik
        
        //   1.yol
        cy.get('.btn-sign-in-simple').click()
        //Login yazısına locate alarak tıkladık
        

        //   2.yol
        /*cy.contains('Log in').click()*/
        //Log in Yazısını bulup tıkladık
       

        //   3.yol
        //cy.contains('log in',{matchCase:false}).click()
        //login yazisina casesevsitive durumuna bakmaksizin tikladi

        cy.get('#login-email').type('mb@babayigit.net')
        cy.get('#login-password').type('M123456.b{enter}')
        //kullanici adi ve sifreyi girerek enter a bastik

    
    });
});