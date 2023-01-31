import Login from "../PageObjects/Login/Login.js"
import SupportRequestPage from "../PageObjects/Support request/SupportRequestPage"
import config from "../config/config.js"
import SupportIncubatorPage from "../PageObjects/Support request/SupportIncubatorPage.js"
import SupportAdminPage from "../PageObjects/Support request/SupportAdminPage.js"
import LogOut from "../PageObjects/Logout/Logout.js"

describe('Login', () => {
  const login=new Login();
  const supportIncubator=new SupportIncubatorPage();
  const supportAdmin=new SupportAdminPage();
  const logout=new LogOut();
  const conf = new config()
  const SupportRequest=new SupportRequestPage();
    it('Should visit the login page correctly', () => {
      cy.visit(conf.GetURL());
    })
    describe('convert data to Json', () => 
        { 
          it('read data from excel', () =>{ 
              cy.parseXlsx('cypress/fixtures/Flat6Labs.xlsx').then( (jsonData) =>{ 
                  for (let i=0;i<=Cypress.$(jsonData[0]).length;i++){
                      if (jsonData[i] ==="Incubator"){
                        cy.log(jsonData[i])

                        cy.writeFile("cypress/fixtures/SignIn_Incubator.json", {Email_Incubator:jsonData[i].data[0][0], Password_Incubator:jsonData[i].data[0][1]})
                        }
                    }
                })
            })
        })
    describe("Reading Data from newly created json file",function(){
      it("login as Incubator ", function(){
        cy.fixture('SignIn_Incubator').then((SignIn_Incubator)=>{
          login.setEmail(SignIn_Incubator.Email_Incubator);
          login.setPassword(SignIn_Incubator.Password_Incubator);
        })
          cy.wait(2000)      
          login.ClickOnSubmit();
      })
    it('Go to support ', () => {
        cy.viewport(1200, 800)
        supportIncubator.GoToSupportPage();
        SupportRequest.GoToSupportRequestPage()
      })
    it('Check the succseful message ', () => {
        SupportRequest.CheckSucssfulMsg()
    })
    it('Log Out from the website ', () => {
      logout.LogOut()
    })
    describe('convert data to Json', () => { 
      it('read data from excel', () =>{ 
          cy.parseXlsx('cypress/fixtures/Flat6Labs.xlsx').then( (jsonData) =>{ 
              for (let i=0;i<=Cypress.$(jsonData[0]).length;i++){
                  if (jsonData[i].name ==="Admin"){
                      cy.writeFile("cypress/fixtures/SignIn_Admin.json", {Email_Admin:jsonData[i].data[0][0], Password_Admin:jsonData[i].data[0][1]})
                    }
                }
            })
        })
    })
    describe("Reading Data from newly created json file",function(){
    it("login as Admin ", function(){
      cy.fixture('SignIn_Admin').then((SignIn_Admin)=>{
        console.log(SignIn_Admin)
        login.setEmail(SignIn_Admin.Email_Admin);
        login.setPassword(SignIn_Admin.Password_Admin);
      })
        cy.wait(1000)      
        login.ClickOnSubmit();
    })
    it('Go to Support', () => {
      supportAdmin.GoToSupportPage()
    })
    it('Go to Mentor Request page ', () => {
      cy.viewport(1400, 800)
      SupportRequest.GoToGeneralQuestion()
    })
    it('Check the  Mentor Request ', () => {
      cy.viewport(1400, 800)
      SupportRequest.CheckGeneralQuestion()
    })})})
})
