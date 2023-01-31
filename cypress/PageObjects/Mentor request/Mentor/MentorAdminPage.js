class MentorRequestAdminPage{
    GoToMentorRequestIncubatorPage(){
        cy.fixture('MentorRequestLocators').then((dataLocators)=>{
            cy.get(dataLocators.SupportButton).click()
            cy.get(dataLocators.IconMentorRequest).click() //------ go to monitor request
        })
    }
}export default MentorRequestAdminPage;