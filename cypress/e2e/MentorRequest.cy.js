import Login from "../PageObjects/Login/Login.js"
import MentorRequestPage from "../PageObjects/Mentor request/MentorRequest"
import config from "../config/config.js"
import SupportIncubatorPage from "../PageObjects/Support request/SupportIncubatorPage"
import LogOut from "../PageObjects/Logout/Logout.js"
import SupportAdminPage from "../PageObjects/Support request/SupportAdminPage.js"
import AddNewMentorRequest from "../PageObjects/Mentor request/AddNewMentorRequest"
import MentorRequestIncubatorPage from "../PageObjects/Mentor request/Mentor/MentorIncubatorPage"
import MentorRequestAdminPage from "../PageObjects/Mentor request/Mentor/MentorAdminPage"

describe('Login', () => {
  const mentorRequest=new MentorRequestPage();
  const login=new Login();
  const conf = new config()
  const mentorRequestIncubatorPage = new MentorRequestIncubatorPage()
  const mentorRequestAdminPage = new MentorRequestAdminPage()
  const supportIncubator=new SupportIncubatorPage();
  const supportAdmin=new SupportAdminPage();
  const addNewMentorRequest=new AddNewMentorRequest();
  const logout=new LogOut();
    it('Should visit the login page correctly', () => {
      cy.visit(conf.GetURL());
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
    
    it('Go to support as incubator', () => {
      cy.viewport(1200, 800)
      supportIncubator.GoToSupportPage();
      })
    it('Go to mentor request page', () => {
      cy.viewport(1200, 800) 
      mentorRequestIncubatorPage.GoToMentorRequestIncubatorPage()
    })
    it('Fill forms of mentor Request ', () => {
      cy.viewport(1200, 800) 
       addNewMentorRequest.FillFormsMentorRequest()
    })
    it('click on the submit button ', () => {
      cy.viewport(1200, 800) 
      addNewMentorRequest.AddButtonMentorRequest()
    })
    it('check the forms of mentor Request are successfuly submited', () => {
      cy.viewport(1200, 800) 
      addNewMentorRequest.CheckSuccessfulMsg()
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
   it('Go to Support as admin', () => {
      supportAdmin.GoToSupportPage()
    })
    it('Go to Mentor Mentor Request ', () => {
      cy.viewport(1200, 800)
      mentorRequestAdminPage.GoToMentorRequestIncubatorPage
    })
    it('Check the Successfull Approval of Mentor Mentor Request ', () => {
      cy.viewport(1200, 800)
      mentorRequest.CheckSuccessfulaApproval()
    })
  })})
})
