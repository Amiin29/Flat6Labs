class Application{
    CheckURL(){
        cy.url().should('contain', 'https://dev.f6l-new.mobelite.fr/'); //---------------Assertion pour tester que l'url est correcte
    }
    Check(){
        cy.fixture('AddNewProgramData').then((AddNewProgramData)=>{
            cy.fixture('AddNewCycleLocators').then((AddNewCycleLocators)=>{
                cy.fixture('CreateCycleSelectionPhaseLocators').then((CreateCycleSelectionPhaseLocators)=>{
            cy.get(AddNewCycleLocators.SearchInput).type(AddNewProgramData.NameProgram) // search name program
            cy.wait(1000)
            cy.get(CreateCycleSelectionPhaseLocators.Button_1).eq(0).click()
            cy.get(CreateCycleSelectionPhaseLocators.Button_2).click()
            })
            })
        })
    }
}
export default Application;