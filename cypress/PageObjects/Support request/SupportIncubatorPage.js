class SupportIncubatorPage{
    GoToSupportPage(){
        cy.fixture('MentorRequestLocators').then((dataLocators)=>{
            cy.get(dataLocators.SupportButton).click() //-------- go to support
        })
    }
}export default SupportIncubatorPage;