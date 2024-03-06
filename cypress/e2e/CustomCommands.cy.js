// Click on link using label
// over writing exiting contain() command
// re-usuable custom command

describe('Custom Commands',()=>{

    it('handling links',()=>{
        cy.visit('https://demo.nopcommerce.com/');

        //direct - without using custom command
        //cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();
        
        //Using Custom Command
        cy.clickLink("Apple MacBook Pro 13-inch");
         cy.get("div[class='product-name'] h1").should("have.text","Apple MacBook Pro 13-inch");

    })

    it('overwriting existing command',()=>{

        cy.visit('https://demo.nopcommerce.com/');
        
        //Using Custom Command
        cy.clickLink("Apple MacBook Pro 13-inch");
         cy.get("div[class='product-name'] h1").should("have.text","Apple MacBook Pro 13-inch");


    })

    it.only('login command',()=>{
        cy.visit('https://demo.nopcommerce.com/');

        cy.clickLink("Log in"); //custom command
        cy.Loginapp('testing@gmail.com','test123');

        cy.get('.ico-account').should('have.text','My account')

    })
})
