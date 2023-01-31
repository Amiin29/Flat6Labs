class LogOut{
    LogOut(){
        cy.fixture('AddNewProgramLocators').then((dataLocators)=>{
            cy.get(dataLocators.IconUser).click()
            cy.get(dataLocators.ButtonLogOut).click()
        })
    }
}export default LogOut;