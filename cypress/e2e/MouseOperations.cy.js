import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')         //npm install --save-dev @4tw/cypress-drag-drop         

describe ("Mouse Operation",()=>{

    it('MouseHOver',()=>{
        cy.visit("https://demo.opencart.com/");

        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('not.be.visible');

        cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']").trigger('mouseover').click();
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('be.visible');
    })


    it('Right Click',()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
       
    //Approach 1
    //    cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');   
    //    cy.get('.context-menu-icon-copy > span').should('be.visible');
        

    //Approach 2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible');

    })

    
    it('Double Click',()=>{

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.frameLoaded('#iframeResult'); //load the frame
        
        //Approach 1 - trigger()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');

    })

    
    it('Drag and Drop using plugin',()=>{
        
        cy.on('uncaught:exception', (err,runnable) =>{
            return false
            })

        cy.visit('https://demo.automationtesting.in/Static.html');
        cy.get("#angular").should('be.visible');
        cy.get('#droparea').should('be.visible');
       
        cy.get("#angular").drag("#droparea",{force:true});

    })   

    
    it.only('Scrolling Page',()=>{
        
        cy.on('uncaught:exception', (err,runnable) =>{
            return false
            })

        cy.visit('https://karsaaz.app/');
        cy.get('body div div div div div:nth-child(3) div:nth-child(1) h2:nth-child(1)').scrollIntoView({duration:2000});
        cy.get('body div div div div div:nth-child(3) div:nth-child(1) h2:nth-child(1)').should('be.visible');

        //footer
        cy.get('body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1)').scrollIntoView({duration:2000});
        cy.get('body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1)').should('be.visible');

    })
})