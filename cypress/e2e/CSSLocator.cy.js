
describe('CSSLocators',()=>{

    it("cssLocators",()=>{

        cy.visit("https://web-stage.farmghar.com/")
        cy.get("#Query").type("bull")
        cy.get("body > div:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > button:nth-child(2)").click();
     

    })

})

