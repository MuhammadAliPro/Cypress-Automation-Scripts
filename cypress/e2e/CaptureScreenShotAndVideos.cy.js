describe('my suit',()=>{

    it('Capture ScreenShot & Video',()=>{
        cy.visit('https://demo.opencart.com/');
        /*cy.screenshot("homepage");
        cy.wait(3000);
        cy.get("img[title='Your Store']").screenshot("logo"); */

        //Automatic capture the screenshot & video on failure only when you execute through CLI

        cy.get('li:nth-child(7) a:nth-child(1)').click();
        cy.get("div[id='content'] h2").should('have.text',"Tables");

        //Run the Terminal command: " npx cypress run --spec cypress\e2e\CaptureScreenShotAndVideos.cy.js "
    })
})