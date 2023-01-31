class MentorRequestIncubatorPage{
    GoToMentorRequestIncubatorPage(){
        cy.fixture('MentorRequestLocators').then((dataLocators)=>{
            cy.get(dataLocators.IconMentorRequest).click() //------ go to monitor request
        })
    }
}export default MentorRequestIncubatorPage;