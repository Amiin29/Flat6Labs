class MentorRequestPage{
    CheckSuccessfulaApproval(){
        const icone= '[href="/admin/supports/inbox/mentorRequest"] > .item-badge'
                cy.fixture('MentorRequestLocators').then((MentorRequestLocators)=>{
                   // cy.get('[href="/admin/supports/inbox/mentorRequest"] > .MuiListItemText-root > .MuiTypography-root').click()
                    cy.get(MentorRequestLocators.PopupCompleteRequest).eq(0).click()
                    cy.get(icone).invoke('text').then((FirstVal) => {
                        const  FirstVal1 = Number(FirstVal)
                        cy.log(FirstVal)
                        cy.wait(1000)
                        cy.get(MentorRequestLocators.CompleteRequest).click()
                        cy.wait(1000)
                        cy.get(icone).invoke('text').then((SecVal) => {
                            const  SecVal1 = Number(SecVal)   
                            cy.log(SecVal1)
                            cy.get(icone).should('have.text',FirstVal1-1)
                        })
                    })
                });

    }
}
export default MentorRequestPage;