/*
T02  Pozitif Login Testi
1- http://www.automationexercise.com adresine git
2- Signup/Login sayfasına git
3- “Login to your account” yazısının bulunduğunu doğrula
4- “New User Signup!” yazısının varlığını doğrula
5- babayigit@gmail.com 123456 ile giriş yap
6- Giriş yaptığını doğrula
7- Çıkış yap
8- Çıkış yapıldığını doğrula
*/

describe('login testi', () => {
    it('Pozitif login testi', () => {
        cy.visit('https://automationexercise.com/')              // 1- http://www.automationexercise.com adresine git
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()  // 2- Signup/Login sayfasına git
        cy.get('.login-form > h2').should('be.visible')          // 3- “Login to your account” yazısının bulunduğunu doğrula
        cy.log('Login to your account yazisi kontrol edildi');
        cy.get('.signup-form > h2').should('be.visible')         // 4- “New User Signup!” yazısının varlığını doğrula
        cy.log('New User Signup yazisi kontrol edildi')

        cy.get('[data-qa="login-email"]').type('babayigit@gmail.com')// 5- babayigit@gmail.com 123456 ile giriş yap
        cy.get('[data-qa="login-password"]').type('123456{enter}')   
        cy.get(':nth-child(10) > a').should('be.visible')        // 6- Giriş yaptığını doğrula

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()  // 7- Çıkış yap
        cy.get('.login-form > h2').should('be.visible')          // 8- Çıkış yapıldığını doğrula
        cy.log('Pozitif login testi tamamlandi')

    });
});
