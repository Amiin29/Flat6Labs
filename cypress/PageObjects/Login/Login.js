class Login{
    setEmail(Email){
        cy.fixture('SignInLocators').then((data)=>{
            cy.get(data.EmailInput).clear({ force: true }).type(Email);
        })
    }
    setPassword(Password){
        cy.fixture('SignInLocators').then((data)=>{
            cy.get(data.PasswordInput).clear({ force: true }).type(Password);
        })
    }
    ClickOnSubmit(){
        cy.fixture('SignInLocators').then((data)=>{
            cy.get(data.ButtonSumbit).click();
        })
    }
    VerifyURL(){
        cy.url().should('contain', 'https://dev.f6l-new.mobelite.fr/'); //assertion pour tester que l'url est correcte
    }

}
export default Login;