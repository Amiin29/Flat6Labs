import config from "../config/config.js"
import Login from "../PageObjects/Login/Login.js"

describe('Signin', () => {
  const login=new Login();
  const conf = new config()
  it('Should visit the login page correctly', () => {
    cy.visit(conf.GetURL());
    login.VerifyURL()
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
    cy.wait(8000)
    cy.fixture('SignIn_Admin').then((SignIn_Admin)=>{
      login.setEmail(SignIn_Admin.Email_Admin);
      login.setPassword(SignIn_Admin.Password_Admin);
    })
      cy.wait(1000)      
      login.ClickOnSubmit();
    })
  })
})