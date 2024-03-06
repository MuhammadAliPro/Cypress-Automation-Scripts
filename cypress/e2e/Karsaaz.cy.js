describe ('Karsaaz App',()=>{
    
    it('Home Page',()=>{

        cy.on('uncaught:exception', (err,runnable) =>{
            return false
            })

        cy.visit("https://stage.karsaaz.app/");
        // Pause for 2 seconds
        cy.wait(2000); // 2000 milliseconds = 2 seconds

        cy.get("a[href='/register']").click();

        cy.title().should('eq', 'Professional Service at Your Doorstep - Karsaaz')
        cy.get("#name").type("Muhammad Ali");
        cy.get("#Phone").type("0112211221");
        cy.get("#email").type("Muhammad.Ali@karsaaz.app");
        cy.get("#male").click();
        cy.get("#password").type("123456");
        cy.get("#confirm_password").type("123456");
        cy.get("#termsAndConditions");
        cy.get("button[type='submit']").click();
        
        // Pause for 2 seconds
        cy.wait(2000); // 2000 milliseconds = 2 seconds
        
        cy.get("input[aria-label='Please enter OTP character 1']").type('123456'); // Replace with your OTP

        cy.get("button[class='w-full flex gap-3 justify-center items-center font-semibold text-sm text-white h-[46px] border bg-[#0973BA] rounded-lg relative']").click();

    })
})