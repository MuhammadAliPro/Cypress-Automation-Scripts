
describe("Assertion Demo",() =>{

    it("Implicit assertion",() =>{
        cy.visit("https://web-stage.farmghar.com/")

        //Should and 
        // cy.url().should('include','web-stage.farmghar.com')
        // cy.url().should('eq','https://web-stage.farmghar.com/')
        // cy.url().should('contain','web-stage.farmghar')

        // cy.url().should('include','web-stage.farmghar.com')
        // .should('eq','https://web-stage.farmghar.com/')
        // .should('contain','web-stage.farmghar')

        // cy.url().should('include','web-stage.farmghar.com')
        // .and('eq','https://web-stage.farmghar.com/')
        // .and('contain','web-stage.farmghar')

        cy.url().should('include','web-stage.farmghar.com')
        .and('eq','https://web-stage.farmghar.com/')
        .and('not.contain','farmghar321')

        // Check the Title Assertion
        cy.title().should('include','farmGhar')
        .and('eq', 'farmGhar')
        .and('contain','farmGhar')

        //Check the logo visible or exist 
        cy.get('.flex-shrink-0').should('be.visible')
        .and('exist')
        
        //Click login button 
        cy.get('.relative > .text-Primary').click()

        cy.xpath("(//div[contains(@class,'max-w-[600px] px-10 w-full h-[500px] rounded-[15px] bg-[#FFFFFF] z-10 pb-6')])[1]").should('have.length','1') //no of links
        cy.get('#Phone').type('03225262009') //provide a value into input box
        cy.get('#Phone').should('have.value','03225262009') //value 

        // cy.get('#Password').type('123456')
        // cy.get('div[class="space-x-2"] button[type="submit"]').click()
    
    })
    
    
    it("explicit assertions",() =>{
        cy.visit("https://web-stage.farmghar.com/")
        cy.get('.relative > .text-Primary').click()
        cy.get('#Phone').type('03225262009') 
        cy.get('#Password').type('123456')
        cy.get('div[class="space-x-2"] button[type="submit"]').click()

        let expName ='Create Account';

        cy.get("a[class='text-[10px] lg:text-[12px]']").then ( (x)=>{


            let actName = x.text()

            //BBD style 
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)


            //TDD Style 
            assert.equal(actName,expName)
            assert.not.equal(actName,expName)
        })

    
    
    })
})