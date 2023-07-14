describe('Write and Read Files', () => {

    it('Write Files', () => {

        cy.writeFile('../../fixture/ornek.txt','"userName":"mb@babayigit.net"')

    });
    
});