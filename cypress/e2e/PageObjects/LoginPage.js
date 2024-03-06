class login

{
    setUserName(Username)
    {
        cy.get("input[placeholder='Username']").type(Username);
    }
    setpassword(password)
    {
        cy.get("input[placeholder='Password']").type(password);
    }
    clickSubmit()
    {
        cy.get("button[type='submit']").click();
    }
    VerifyLogin()
    {
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard');
    }
}
export default login;