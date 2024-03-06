//Pom (Page Object Model)

import login from "./PageObjects/LoginPage2 ";

describe('pom',()=>{                
    //General approach
    it ('LoginTest',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get ("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text",'Dashboard');
    })

     //Using pom
     it('LoginTest',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const ln =new login();
        ln.setUserName("admin")
        ln.setpassword("admin123")
        ln.clickSubmit();
        ln.VerifyLogin();
    })


    //Using pom with fixture
     it.only ('LoginTest',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.fixture('Orangehrm').then((data)=>{
            const ln =new login();
            ln.setUserName(data.username)
            ln.setpassword(data.password)
            ln.clickSubmit();
            ln.VerifyLogin();
        })
        
    })   
})