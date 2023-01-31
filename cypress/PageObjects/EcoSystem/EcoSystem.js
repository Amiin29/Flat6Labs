class EcoSystem{
    GoToEcoSystem(){
        cy.fixture('AddNewApplicationLocators').then((AddNewApplicationLocators)=>{
                cy.get(AddNewApplicationLocators.GoToEcoSystem).click()
            })
    }
    SelectProgram(){
        cy.fixture('CreateCycleSelectionPhaseLocators').then((CreateCycleSelectionPhaseLocators)=>{
            cy.fixture('AddNewProgramData').then((AddNewProgramData)=>{
                cy.get(CreateCycleSelectionPhaseLocators.SearchInput).type(AddNewProgramData.NameProgram)
            })
        })

    }
    ClickOnProgramSelected(){
        cy.wait(1000)
        cy.fixture('AddNewApplicationLocators').then((AddNewApplicationLocators)=>{
            cy.get(AddNewApplicationLocators.ApplyButton).click()
        })
    }
}
export default EcoSystem;