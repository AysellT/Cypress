/*
T02  Negatif Login Testi
1- http://www.automationexercise.com adresine git
2- Signup/Login sayfasına git
3- baba71@gmail.com 123456 ile giriş yap
4- Giriş yapılamadığını doğrula 
*/

describe('Login testi', () => {
    it('Negatif login testi', () => {
        cy.visit('https://automationexercise.com/') // 1- http://www.automationexercise.com adresine git
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click() // 2- Signup/Login sayfasına git

        cy.get('[data-qa="login-email"]').type('baba71@gmail.com') // 3- baba71@gmail.com 123456 ile giriş yap
        cy.get('[data-qa="login-password"]').type('123456{enter}')   

        cy.get('.login-form > form > p').should('include.text','incorrect') // 4- Giriş yapılamadığını doğrula 
        cy.log('gecersiz bilgiler ile siteye giris yapilamadigi dogrulandi')
    });
});