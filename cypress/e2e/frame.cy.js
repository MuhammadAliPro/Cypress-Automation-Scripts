import 'cypress-iframe'
describe("handling frame",()=>{

    it('approach1',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe");
    
        const iframe=cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);
            
            iframe.clear().type("Welcome to Pakistan {selectall}");

            cy.get("[aria-label='Bold']").click();
    })

    it('approach2 -By Using Custom Command',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");
        
        cy.getIframe('#mce_0_ifr').clear('Your content goes here').type("Welcome {selectall}");

        cy.get("[aria-label='Bold']").click();
    })

    
    it('approach3 -By Cypress-iframe Plugin',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded('#mce_0_ifr');   // Load the frame
        cy.iframe('#mce_0_ifr').clear('Your content goes here   ').type("PAKISTAN {selectall}");

        cy.get("[aria-label='Bold']").click();

    })
})