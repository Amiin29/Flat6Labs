class AddNewProgram{
    ClickOnAddProgram(){
        cy.fixture('AddNewProgramLocators').then((data)=>{
            cy.get(data.ButtonAddNewProgram).click()
        }
    )}
   FillFormsAddNewProgram(nameprog){
    cy.fixture('AddNewProgramLocators').then((data)=>{
        cy.get(data.NameProgram).type(nameprog)
        cy.get(data.Selectcity).click()
        cy.get(data.SelectMonastir).click()
        cy.get(data.Select1).click()
        cy.get(data.Manufacturing).click()
        })
    }
    ClickonSaveButton(){
        cy.fixture('AddNewProgramLocators').then((data)=>{
            cy.get(data.SaveButton).click()
            })
    }
    CheckSuccessfulAdditionProgram(){  //------------------- verification d'ajout d'un programme avec succès
        cy.fixture('CreateCycleSelectionPhaseLocators').then((CreateCycleSelectionPhaseLocators)=>{
            cy.fixture('AddNewProgramData').then((data2)=>{
                cy.get(CreateCycleSelectionPhaseLocators.SearchInput).type(data2.NameProgram)
                cy.get(CreateCycleSelectionPhaseLocators.GetNameProgram).should('contain', data2.NameProgram);
            })
        })
    }
}export default AddNewProgram;