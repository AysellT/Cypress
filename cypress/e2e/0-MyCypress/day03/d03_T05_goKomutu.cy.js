describe('go komutu kullanimi', () => {

    it('ileri geri', () => {
        cy.visit('https://www.google.com')
        cy.get('#APjFqb').type('Matematikci{enter}')

        cy.go('back') //cy.go(-1)
        cy.go('forward') //cy.go(1)

        cy.reload()
        cy.wait(3000)
    });
    
});