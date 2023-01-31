class SupportAdminPage{
    GoToSupportPage(){
        cy.fixture('AddNewProgramLocators').then((dataLocators)=>{
            cy.viewport(1200, 800)
            cy.get(dataLocators.Supports).click()
        })
    }
    AcceptCycle(){
        cy.fixture('CreateCycleSelectionPhaseLocators').then((CreateCycleSelectionPhaseLocators)=>{
            cy.viewport(1200, 800)
            cy.wait(4000)
            cy.get(CreateCycleSelectionPhaseLocators.ButtCycleApproval).click()
           cy.get(CreateCycleSelectionPhaseLocators.CycleApproval).eq(0).click()
            cy.get(CreateCycleSelectionPhaseLocators.CycleApproval_2).click()
        })
    }
}export default SupportAdminPage;