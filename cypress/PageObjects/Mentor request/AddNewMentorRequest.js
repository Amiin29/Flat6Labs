class AddNewMentorRequest{
    FillFormsMentorRequest(){
        cy.fixture('AddNewMentorRequestLocators').then((AddNewMentorRequestLocators)=>{
            cy.get(AddNewMentorRequestLocators.SelectProgram).click()//----select program 
            cy.get(AddNewMentorRequestLocators.SelectFirstPorgram).click() //----select program 14
            cy.get(AddNewMentorRequestLocators.SelectLocation).click() //---- select the popup location
            cy.get(AddNewMentorRequestLocators.SelectLocationMn).click() //---select monastir location
            cy.get(AddNewMentorRequestLocators.SelectSpeciality).click()
            cy.get(AddNewMentorRequestLocators.SelectOneSpeciality).click()
            cy.get(AddNewMentorRequestLocators.SelectIdealCommitment).click()
            cy.get(AddNewMentorRequestLocators.SelectOneIdealCommitment).click()
            cy.fixture('MentorRequestData').then((MentorRequestData)=>{
                cy.get(AddNewMentorRequestLocators.AdditionalComments).type(MentorRequestData.AdditionalComments
            )})
        })
    }
    AddButtonMentorRequest(){
        cy.fixture('AddNewMentorRequestLocators').then((AddNewMentorRequestLocators)=>{
            cy.get(AddNewMentorRequestLocators.SubmitButton).click()
        })
    }
    CheckSuccessfulMsg(){
        cy.fixture('MentorRequestLocators').then((dataLocators)=>{
            cy.fixture('MentorRequestData').then((MentorRequestData)=>{
                cy.get(dataLocators.SucessfulMsg).should('contain', MentorRequestData.SucessfulMsg);
            })
         })    
    }
}
export default AddNewMentorRequest;