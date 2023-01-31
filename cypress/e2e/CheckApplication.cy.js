import AddNewProgramPage from "../PageObjects/Programs/AddNewProgramPage.js";
import config from "../config/config.js"
import Login from "../PageObjects/Login/Login.js"
import LogOut from "../PageObjects/Logout/Logout.js"
import EcoSystem from "../PageObjects/EcoSystem/EcoSystem.js"
import Application from "../PageObjects/Application/Application.js"
import FillFormsApplication from "../PageObjects/Application/FillFormsApplication.js"

describe('Sign Up to FLAT6LABS', () => {
  const program=new AddNewProgramPage();
  const conf = new config()
  const login=new Login();
  const logout=new LogOut();
  const ecoSystem=new EcoSystem();
  const application=new Application();
  const fillFormsApplication=new FillFormsApplication();
    it('Should visit the login page correctly', () => {
      cy.visit(conf.GetURL());
      application.CheckURL()
    })
    describe('convert data to Json', () => 
    { 
      it('read data from excel', () =>{ 
          cy.parseXlsx('cypress/fixtures/Flat6Labs.xlsx').then( (jsonData) =>{ 
            console.log(jsonData[3])

              for (let i=0;i<=Cypress.$(jsonData[0]).length;i++){

                  if (jsonData[i].name ==="Startup"){
                    console.log(jsonData[i].name)
                      cy.writeFile("cypress/fixtures/SignIn_Startup.json", {Email_Startup:jsonData[i].data[0][0], Password_Startup:jsonData[i].data[0][1]})
                    }
                }
            })
        })
    })
    describe("Reading Data from newly created json file",function(){
      it("login as Incubator ", function(){
        cy.fixture('SignIn_Startup').then((SignIn_Startup)=>{
          login.setEmail(SignIn_Startup.Email_Startup);
          login.setPassword(SignIn_Startup.Password_Startup);
        })
          cy.wait(2000)      
          login.ClickOnSubmit();
      })
    it('Go to EcoSystem', () => {
      cy.viewport(1200, 800)
      ecoSystem.GoToEcoSystem()
    }) 
    it('Select a program and click on the program selected', () => {
      cy.viewport(1200, 800)
      ecoSystem.SelectProgram()
      ecoSystem.ClickOnProgramSelected()
    })
    it('fill the first interface', () => {
      cy.viewport(1200, 800)
      fillFormsApplication.FillApplicationForm_1() 
    })
    it('Check successful message of form 1',()=>{
      cy.viewport(1200, 800)
      fillFormsApplication.CheckSuccessfulMsgForm_1()
    })
    it('fill the seconde interface', () => {
      cy.viewport(1200, 800)
      fillFormsApplication.FillSecondInterface() 
    })
    it('Check successful message of form 2',()=>{
      cy.viewport(1200, 800)
      fillFormsApplication.CheckSuccessfulMsgForm_2()
    })
    it('fill the seconde interface', () => {
      cy.viewport(1200, 800)
      fillFormsApplication.FillThirdInterface() 
    })
    it('Check successful message of form 2',()=>{
      cy.viewport(1200, 800)
      fillFormsApplication.CheckSuccessfulMsgForm_3()
    })
    it('LogOut from the website', () => {
      logout.LogOut()
    })
    describe('convert data to Json', () => 
    { 
      it('read data from excel', () =>{ 
          cy.parseXlsx('cypress/fixtures/Flat6Labs.xlsx').then( (jsonData) =>{ 
              for (let i=0;i<=Cypress.$(jsonData[0]).length;i++){
                  if (jsonData[i].name ==="Incubator"){
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
    it('Click On a selected Program', () => {
        cy.wait(8000)
        program.ClickOnProgram();
    })
    it('Check the application', () => {
      cy.viewport(1200, 800)
      application.Check()   
    })
  })})
})