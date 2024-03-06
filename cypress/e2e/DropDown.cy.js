
describe('Handle dropdown',()=>{

    it.skip("DropDown with select",function() {

        cy.on('uncaught:exception', (err,runnable) =>{
            return false
            })

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country")
        .select('New Zealand')
        .should('have.value','New Zealand')

    })

    it("DropDown with select",function() {

        cy.on('uncaught:exception', (err,runnable) =>{
            return false
            })

        cy.visit("https://dummyflights.com/?gclid=CjwKCAjwoqGnBhAcEiwAwK-OkXSG3hmFq6OobMnGg3jGhFzMqT7lmMj906KlgZuUAIgaIT4bwTa5ohoC7fUQAvD_BwE")
        cy.get("#select2-departure-city-container").click() 
        cy.get("span[class='select2-search select2-search--dropdown'] input[role='searchbox']").type('Adnan khan').type('{enter}')

    })
})