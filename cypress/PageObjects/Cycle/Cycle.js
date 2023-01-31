class Cycle {
    ClickOnButtonAddNewCycle(){
        cy.fixture('CreateCycleSelectionPhaseLocators').then((CreateCycleSelectionPhaseLocators)=>{
            cy.get(CreateCycleSelectionPhaseLocators.MuiButton).click()
            cy.get(CreateCycleSelectionPhaseLocators.ButtonAddNewCycle).click()
    }
   )}
  

    FillFormsAddNewCycle(){
        Date.prototype.addDays = function (days) {
            let date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }
        let date = new Date();
        console.log(date.addDays(7));
        let day = date.addDays(1).getDay();
        console.log(day);
        let month = date.addDays(1).getMonth();
        console.log(month);
        let year = date.addDays(1).getFullYear();
        cy.fixture('AddNewCycleLocators').then((AddNewCycleLocators)=>{
            cy.wait(2000);
            cy.fixture('AddNewCycleData').then((AddNewCycleData)=>{
                cy.get(AddNewCycleLocators.NameCycle).eq(0).type(AddNewCycleData.NameCycle)
                cy.get(AddNewCycleLocators.PickCalendar_1).clear()
                cy.get(AddNewCycleLocators.PickCalendar_1).type(String(date.getDate()).padStart(2, '0')+"/"+String(date.getMonth() + 1).padStart(2, '0') +"/"+parseInt(date.getFullYear()))
                cy.get(AddNewCycleLocators.PickCalendar_2).clear()
                cy.get(AddNewCycleLocators.PickCalendar_2).type(String(date.addDays(1).getDate()).padStart(2, '0')+"/"+String(date.addDays(1).getMonth() + 1).padStart(2, '0') +"/"+parseInt(date.addDays(1).getFullYear()))
                cy.get(AddNewCycleLocators.PickCalendar_3).clear()
                cy.get(AddNewCycleLocators.PickCalendar_3).type(String(date.addDays(2).getDate()).padStart(2, '0')+"/"+String(date.addDays(2).getMonth() + 1).padStart(2, '0') +"/"+parseInt(date.addDays(2).getFullYear()))
                cy.get(AddNewCycleLocators.PickCalendar_4).clear()
                cy.get(AddNewCycleLocators.PickCalendar_4).type(String(date.addDays(3).getDate()).padStart(2, '0')+"/"+String(date.addDays(3).getMonth() + 1).padStart(2, '0') +"/"+parseInt(date.addDays(3).getFullYear()))
                cy.get(AddNewCycleLocators.PickCalendar_5).clear()
                cy.get(AddNewCycleLocators.PickCalendar_5).type(String(date.addDays(4).getDate()).padStart(2, '0')+"/"+String(date.addDays(4).getMonth() + 1).padStart(2, '0') +"/"+parseInt(date.addDays(4).getFullYear()))
                cy.get(AddNewCycleLocators.ProgramTitle).eq(3).type(AddNewCycleData.ProgramTitle)
                cy.get(AddNewCycleLocators.Marketing_pitch).type(AddNewCycleData.Marketing_pitch)
            })
                cy.get(AddNewCycleLocators.ButtonSaveCycle).click()
        })
    }
    CheckSuccessfulAdditionCycle(){
        cy.fixture('CreateCycleSelectionPhaseLocators').then((CreateCycleSelectionPhaseLocators)=>{
            cy.fixture('AddNewCycleData').then((AddNewCycleData)=>{
                cy.get(CreateCycleSelectionPhaseLocators.SearchInput).type(AddNewCycleData.NameCycle)
                cy.get(CreateCycleSelectionPhaseLocators.GetNameCycle).should('contain', AddNewCycleData.NameCycle);
            })
            cy.viewport(1200, 800)
            cy.wait(2000);
            cy.get(CreateCycleSelectionPhaseLocators.ViewCycle).eq(0).click()
            cy.get(CreateCycleSelectionPhaseLocators.SubmitCycle).eq(0).click()
        })
    }
}export default Cycle;