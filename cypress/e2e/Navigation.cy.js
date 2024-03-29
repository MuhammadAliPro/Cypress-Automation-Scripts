//go()

describe('mysuite',()=>{
    it ('Navigation Test',()=>{
        cy.visit('https://demo.opencart.com/');
        cy.title().should('eq',"Your Store");//home page
        cy.get("li:nth-child(7) a:nth-child(1)").click();

        cy.get("div[id='content'] h2").should('have.text',"Cameras");

        cy.go('back'); //go back to home page
        cy.title().should('eq',"Your Store");

        cy.go('forward');//cameras
        cy.get("div[id='content'] h2").should('have.text',"Cameras");

        cy.go(-1);//go back to home page
        cy.title().should('eq',"Your Store");

        cy.go(1); //cameras
        cy.get("div[id='content'] h2").should('have.text',"Cameras");

        cy.reload();

    })
})