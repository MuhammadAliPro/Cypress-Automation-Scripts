
describe('xpathLocators',()=>{

    it('find NO of products',()=>{

        cy.visit("https://web-stage.farmghar.com/")
        cy.xpath("(//a)[25]").should('have.length',1)

    })
})