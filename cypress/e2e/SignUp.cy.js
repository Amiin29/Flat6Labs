//import SignUp from "../PageObjects/SignUpPage"
import config from "../config/config.js"

describe('Sign Up to FLAT6LABS', () => {
  //const signU=new SignUp();
  const conf = new config()

  it('Should visit the login page correctly', () => {
    cy.visit(conf.GetURL());
   // cy.url().should('contain', 'https://dev.f6l-new.mobelite.fr/'); //---------------Assertion pour tester que l'url est correcte
    cy.get('.text-center').click();
  })
  /*it('Fill the forms : StartupName , FirstName , LasteName , Email , Password , ConfirmPassword', () => {
      cy.fixture('SignUpData').then((data)=>{
        signU.SetStartupName(data.SratupName);
        signU.SetFirstName(data.FirstName);
        signU.SetLastName(data.LastName);
        signU.SetEmail(data.Email);
        signU.SetPassword(data.Password);
        signU.SetConfirmPassword(data.Confirmpassword);
      })
  })
  it('Click on button SignUp', () => {
    signU.ClickOnSubmit(); 
  })
  it('Verify Error Message ', () => {
    signU.VerifyErrorMessage();//----------------------------------Email already taken
  })*/
})