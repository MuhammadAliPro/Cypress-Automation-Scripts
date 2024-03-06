class login

{
    txtUserName = "input[placeholder='Username']";
    txtPassword = "input[placeholder='Password']";
    btnSubmit = "button[type='submit']";
    lblmsg = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

    setUserName(Username)
    {
        cy.get(this.txtUserName).type(Username);
    }
    setpassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }
    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }
    VerifyLogin()
    {
        cy.get(this.lblmsg).should('have.text','Dashboard');
    }
}
export default login;