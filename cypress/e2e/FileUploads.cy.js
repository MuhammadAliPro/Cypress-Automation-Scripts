// First of all cypress file upload ---> run the command:  npm install --save-dev cypress-file-upload 

import 'cypress-file-upload';

describe('file Uploads',()=>{

//Single file upload

    it('Single file upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('Muhammad Ali CV.pdf');
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
    })

//File Upload - Rename

    it('File Upload - Rename',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({filePath:'Muhammad Ali CV.pdf',fileName:'CV.pdf'});
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
    })

// File Upload - Drag and Drop

    it('File Upload - Drag and Drop',()=>{
        
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').attachFile("Muhammad Ali CV.pdf",{subjectType:'drag-n-drop'}); 
          
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
         .contains('Muhammad Ali CV.pdf');   
    })

//Multiple File Upload

    it('Multiple File Upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').attachFile(['Bug report HelpAreUs.docx','Muhammad Ali CV.pdf']);
        cy.wait(5000);
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:');
    })

//File Upload - Shadow Dom

    it.only('File Upload - Shadow Dom',()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
        cy.get('.smart-file-upload-header',{includeShadowDom:true}).attachFile('Muhammad Ali CV.pdf');
    })

});