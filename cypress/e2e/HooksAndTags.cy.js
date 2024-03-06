//Hooks

//Before
//After
//Before Each
//After Each

describe('My Test Suit',()=>{

    before(()=>{
        cy.log("***** Launch *****")
    })

    after(()=>{
        cy.log("***** Close App *****")
    })

    beforeEach(()=>{
        cy.log("***** Login *****")
    })

    afterEach(()=>{
        cy.log("***** Logout *****")
    })

    it ('search',()=>{

        cy.log("***** Searching *****")
    })

    it('Advance Search',()=>{
        
        cy.log("*****Advance Searching *****")

    })

    it.only('listing Products',()=>{
        
        cy.log("***** Listing Products *****")

    })

})