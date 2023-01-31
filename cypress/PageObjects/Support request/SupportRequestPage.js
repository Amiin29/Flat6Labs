class SupportRequest{
    GoToSupportRequestPage(){
                cy.fixture('SupportRequestLocators').then((SupportRequestLocators)=>{
                    cy.get(SupportRequestLocators.IconeSupportRequest).click()
                    cy.fixture('SupportRequestData').then((SupportRequest)=>{
                        cy.fixture('AddNewSupportRequest').then((AddNewSupportRequest)=>{
                            cy.get(AddNewSupportRequest.InputRequest).type(SupportRequest.SupportRequest)
                            cy.get(AddNewSupportRequest.SubmitButton).click()
                            cy.get(SupportRequestLocators.MsgSucess).should('contain', SupportRequest.MsgSucess);
                        })
                    })
                })
    }
    CheckSucssfulMsg(){
        cy.fixture('SupportRequestLocators').then((SupportRequestLocators)=>{
            cy.fixture('SupportRequestData').then((SupportRequest)=>{
                cy.get(SupportRequestLocators.MsgSucess).should('contain', SupportRequest.MsgSucess);
            })

        })
    }
    GoToGeneralQuestion(){
        cy.fixture('SupportRequestLocators').then((SupportRequestLocators)=>{
            cy.fixture('AddNewSupportRequest').then((AddNewSupportRequest)=>{
                cy.get('[href="/admin/supports/inbox/generalQuestion"]').click()
                cy.get(AddNewSupportRequest.SelectGeneralQuestion).eq(0).click()
            })
        })
    }
    CheckGeneralQuestion(){
        cy.fixture('SupportRequestLocators').then((SupportRequestLocators)=>{
                cy.get(SupportRequestLocators.generalQuestionIcone).invoke('text').then((FirstVal) => {
                    const  FirstVal1 = Number(FirstVal)
                    cy.log('-----------',FirstVal1)
                    cy.wait(1000)
                    cy.get(SupportRequestLocators.ButtonMarkAsComplete).click()
                    cy.wait(1000)
                    cy.get(SupportRequestLocators.generalQuestionIcone).invoke('text').then((SecVal) => {
                        const  SecVal1 = Number(SecVal)   
                        cy.log(SecVal1)
                        cy.get(SupportRequestLocators.generalQuestionIcone).should('have.text',FirstVal1-1)
                    })
                
            });
        })
    }
}
export default SupportRequest;