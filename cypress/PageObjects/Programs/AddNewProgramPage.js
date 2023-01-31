class AddNewProgramPage{
    ClickOnProgram(){
        cy.fixture('CreateCycleSelectionPhaseLocators').then((CreateCycleSelectionPhaseLocators)=>{
            cy.get(CreateCycleSelectionPhaseLocators.ButtonSumbit).click()
            cy.get(CreateCycleSelectionPhaseLocators.Programs).click()
        })
    }
    VerifyApprovedCycle(){
        cy.viewport(1200, 800)
        cy.fixture('CreateCycleSelectionPhaseLocators').then((CreateCycleSelectionPhaseLocators)=>{
            cy.wait(4000)
            cy.get(CreateCycleSelectionPhaseLocators.MuiIconButton).click()
            cy.fixture('AddNewProgramData').then((AddNewProgramData)=>{
            cy.get('.p-16 > :nth-child(1) > :nth-child(2) > .flex > div').should('contain', AddNewProgramData.MsgSuccessAproval);
            })
        })
    }
}
export default AddNewProgramPage;