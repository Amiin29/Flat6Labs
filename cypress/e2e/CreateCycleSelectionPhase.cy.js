import AddNewProgramPage from "../PageObjects/Programs/AddNewProgramPage.js";
import config from "../config/config.js"
import Login from "../PageObjects/Login/Login.js"
import LogOut from "../PageObjects/Logout/Logout.js"
import AddNewProgram from "../PageObjects/Programs/AddNewProgram.js"
import Cycle from "../PageObjects/Cycle/Cycle.js"
import SupportAdminPage from "../PageObjects/Support request/SupportAdminPage.js"

describe('Login', () => {
  const program=new AddNewProgramPage();
  const login=new Login();
  const cycle=new Cycle();
  const logout=new LogOut();
  const support=new SupportAdminPage();
  const addNewProgram = new AddNewProgram()
  const conf = new config()
  it('Should visit the login page correctly', () => {
    cy.visit(conf.GetURL());
    login.VerifyURL()
  })
  it('Login as incubator', () => {
    cy.fixture('SignInData').then((SignInData)=>{
      login.setEmail(SignInData.Email_Incubator);
      login.setPassword(SignInData.Password_Incubator);
      login.ClickOnSubmit();
    })
  })
  it('Open the page Porgrams', () => {
    program.ClickOnProgram();
  })
  it('Open the popup for adding new program', () => {
    addNewProgram.ClickOnAddProgram()
  })
  it('Fill the forms of addition new program and check the program is Successfuly added', () => {
      cy.fixture('AddNewProgramData').then((data)=>{
        addNewProgram.FillFormsAddNewProgram(data.NameProgram)
        addNewProgram.ClickonSaveButton()
      })
    addNewProgram.CheckSuccessfulAdditionProgram()
  })
  it('Open the popup for adding new Cycle', () => {
    cycle.ClickOnButtonAddNewCycle()
  })
  it('Fill the forms of addition new cycle and check the cycle is Successfuly added', () => {
    cycle.FillFormsAddNewCycle()
    cy.wait(2000);
    cycle.CheckSuccessfulAdditionCycle()
  })
  it('LogOut from the website', () => {
    logout.LogOut()
  })
  it('Login as admin', () => {
    cy.wait(1000)    
    cy.fixture('SignInData').then((SignInData)=>{
      cy.wait(8000)
      login.setEmail(SignInData.Email_Admin);
      login.setPassword(SignInData.Password_Admin);
    })
    login.ClickOnSubmit();
  })
  it('Go to Support', () => {
    support.GoToSupportPage()
  })
  it('Accept Cycle Approval ', () => {
    support.AcceptCycle()
  })
  it('LogOut from the website', () => {
    logout.LogOut()
  })
  it('Login as Incubator', () => {
    cy.wait(1000);
    cy.fixture('SignInData').then((SignInData)=>{
      cy.wait(8000)
      login.setEmail(SignInData.Email_Incubator);
      login.setPassword(SignInData.Password_Incubator);
      login.ClickOnSubmit();
    })
    cy.wait(500);
  }) 
  it('Check the content message of the notification ', () => {
    cy.viewport(1200, 800)
    program.VerifyApprovedCycle();
  })
})
