import HomePage from "../../POM/HomePage.cy";
import LoginPage from "../../POM/LoginPage.cy";

describe('POM ile Login', () => {

    it('Login testi', () => {

        const homePage = new HomePage()
        const loginPage=new LoginPage()   

        homePage.getVisit()
        //cy.get('.btn-sign-in-simple').click()

        homePage.getLoginlink()
        loginPage.getEmailBox()
        loginPage.getPasswordBox()
        loginPage.getLoginButton()
        loginPage.getAssert()
        
    });
    
});