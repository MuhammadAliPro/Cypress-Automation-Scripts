describe("Cheking UI Elements",() =>{

    // it("Checking Radio Button",() =>{
    //     cy.visit("https://demoqa.com/")
    //     cy.get("div[class='home-body'] div:nth-child(2) div:nth-child(1) div:nth-child(2)").click()
    //     cy.get("div[class='element-list collapse show'] span[class='text']").click()

    //     //visiblity of radio button
    //     cy.get("label[for='gender-radio-1']").should('be.visible')
    //     cy.get("label[for='gender-radio-2']").should('be.visible')
        
    //     //Selecting Radio Button
    //     cy.get("label[for='gender-radio-1']").click()
    //    // cy.get("label[for='gender-radio-2']").click()
    // })

    it("Checking checkbox Button",() =>{
        cy.visit("https://demoqa.com/")
        cy.get("div[class='home-body'] div:nth-child(2) div:nth-child(1) div:nth-child(2)").click()
        cy.get("div[class='element-list collapse show'] span[class='text']").click()

        //visiblity of radio button
        cy.get("label[for='hobbies-checkbox-1']").should('be.visible')

        //Selecting single check box
        cy.get("label[for='hobbies-checkbox-1']").click()
        cy.get("div[id='hobbiesWrapper'] div[class='col-md-9 col-sm-12'] div:nth-child(2)").click()
        
        //UnSelecting check box
        //cy.get("label[for='hobbies-checkbox-1']").check().should('be.checked');

        
    })
})

