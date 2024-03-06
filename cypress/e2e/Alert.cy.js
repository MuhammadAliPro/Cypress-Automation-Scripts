describe('Alert',()=>{

    // (1). JavaScritp Alert: It will have some text and an 'OK' button.

    it.skip('JS Alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert',(t)=>{

            expect(t).to.contain('I am a JS Alert')
        })

        cy.get('#result').should('have.text','You successfully clicked an alert');

    })

    // (2). JavaScritp Confirm Alert: It will have some text and an 'OK' and 'cancel' button.

    it('JS confirm Alert - OK',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(t)=>{

            expect(t).to.contain('I am a JS Confirm')
        })

        cy.get('#result').should('have.text','You clicked: Ok');
    })

    it('JS confirm Alert-cancel',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(t)=>{

            expect(t).to.contain('I am a JS Confirm')
        })
        
        cy.on('window:confirm',()=> false);
        cy.get('#result').should('have.text','You clicked: Cancel')


    })
    // (3). JavaScritp Prompt Alert: It will have some text with a text box for user input along with 'OK' button.

    it('JS Prompt Alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("wellcome");
        })

        cy.get("button[onclick='jsPrompt()']").click();

        //cypress is automatically click to ok button
        cy.get("#result").should('have.text','You entered: wellcome')

    })


   // cy.on('uncaught:exception')

    // (4). Authenticated Alert
    it.only('Authenticated alert',()=>{
        //appraoch 1
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{ auth:
                                                                   {
                                                                     username:"admin",
                                                                     password:"admin"
                                                                    }

                                                                });
    
    cy.get("div[class='example'] p").should('have.contain',"Congratulations")
    
    })
})