///<reference types="Cypress" />

describe('File Upload', () => {
    //cypress-file-upload plugins yuklenmeli

    it('Single File Upload', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const path1 = "wise1.jpg"
        cy.get('#filesToUpload').attachFile(path1) //sectigimiz dosyayi yukledik

        cy.get('#filesToUpload').should('include.text','wise1') //yukledigini dogruladik

    });

    it.skip('Multiple File Upload 1', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        
        const path1 = "wise1.jpg"
        const path2 = "wise2.jpg"
        const path3 = "wise3.jpg"

        cy.get('#filesToUpload').attachFile(path1)
                                .attachFile(path2)
                                .attachFile(path3)

        cy.get('#filesToUpload').should('include.text','wise3')
    });

    it('Multiple File Upload 2', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const path1 = "wise1.jpg"
        const path2 = "wise2.jpg"
        const path3 = "wise3.jpg"
        
        cy.get('#filesToUpload').attachFile([path1, path2, path3])

    });
});