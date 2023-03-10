class FillFormsApplication{
    FillApplicationForm_1(){
        cy.fixture('AddNewApplicationLocators').then((AddNewApplicationLocators)=>{
            cy.fixture('AddNewApplicationData').then((AddNewApplicationData)=>{
                cy.wait(500)
                cy.wait(1000)
                cy.get(AddNewApplicationLocators.shortDescription_11).type(AddNewApplicationData.DatashortDescription_11)
                cy.get(AddNewApplicationLocators.LongDescription).type(AddNewApplicationData.DataLongDescription)
                cy.get(AddNewApplicationLocators.SelectSector).click()
                cy.get(AddNewApplicationLocators.ChooseSector).click()
                cy.get(AddNewApplicationLocators.TypeDate).type(AddNewApplicationData.DataDate)
                cy.get(AddNewApplicationLocators.Progress).click()
            })
        })
    }
    CheckSuccessfulMsgForm_1(){
        cy.fixture('AddNewApplicationLocators').then((AddNewApplicationLocators)=>{
            cy.fixture('AddNewApplicationData').then((AddNewApplicationData)=>{
                cy.get(AddNewApplicationLocators.Msg).should('have.text',AddNewApplicationData.DataMsg)
                cy.get(AddNewApplicationLocators.SaveProgress).click()
                cy.get(AddNewApplicationLocators.ContinuButton).click()
            })
        })
    }
    FillSecondInterface(){
        cy.fixture('AddNewApplicationLocators').then((AddNewApplicationLocators)=>{
            cy.fixture('AddNewApplicationData').then((AddNewApplicationData)=>{
                cy.get(AddNewApplicationLocators.Website).type(AddNewApplicationData.Website)
                cy.get(AddNewApplicationLocators.Instagram).type(AddNewApplicationData.Instagram)
                cy.get(AddNewApplicationLocators.Facebook).type(AddNewApplicationData.Facebook)
                cy.get(AddNewApplicationLocators.LinkedIn).type(AddNewApplicationData.LinkedIn)
                cy.get(AddNewApplicationLocators.Address).type(AddNewApplicationData.Address)
                cy.get(AddNewApplicationLocators.SelectRegion).click()
                cy.get(AddNewApplicationLocators.SelectRegionMonastir).click()
                cy.get(AddNewApplicationLocators.Phone).type(AddNewApplicationData.Phone)
            }) 
        })
    }
    CheckSuccessfulMsgForm_2(){
        cy.fixture('AddNewApplicationLocators').then((AddNewApplicationLocators)=>{
            cy.fixture('AddNewApplicationData').then((AddNewApplicationData)=>{
                cy.get(AddNewApplicationLocators.SaveProgressInterface2).click()
                cy.wait(500)
                cy.get('h3').should('have.text',AddNewApplicationData.DataMsg)
                cy.get(AddNewApplicationLocators.ContinuButtonInterface2).click()
            })
        })
    }
    FillThirdInterface(){
        cy.fixture('AddNewApplicationLocators').then((AddNewApplicationLocators)=>{
            cy.fixture('AddNewApplicationData').then((AddNewApplicationData)=>{
                cy.get(AddNewApplicationLocators.SelectLegalForm).click()
                cy.get(AddNewApplicationLocators.SelectTypeLegalForm).click()
                cy.get(AddNewApplicationLocators.SelectDevStage).click()
                cy.get(AddNewApplicationLocators.SelectDevStage1).click()
                cy.get(AddNewApplicationLocators.FinnancialStage).click()
                cy.get(AddNewApplicationLocators.FinnancialStage1).click()
                cy.get(AddNewApplicationLocators.SelectMarket).click()
                cy.get(AddNewApplicationLocators.SelectTypeMarket).click()
                cy.get(AddNewApplicationLocators.Product).type(AddNewApplicationData.Product)
                cy.get(AddNewApplicationLocators.SelectTargetGeography).click()
                cy.get(AddNewApplicationLocators.SelectTargetGeographyEurope).click()
                cy.get(AddNewApplicationLocators.SelectBusinessModel).click()
                cy.get(AddNewApplicationLocators.SelectTypeBusinessModel).click()
                cy.get(AddNewApplicationLocators.startupActLabel).click()
                cy.get(AddNewApplicationLocators.startupTypeActLabel).click()
                cy.get(AddNewApplicationLocators.Investissement).type(AddNewApplicationData.Investissement)
            }) 
        })
    }
    CheckSuccessfulMsgForm_3(){
        cy.fixture('AddNewApplicationLocators').then((AddNewApplicationLocators)=>{
            cy.fixture('AddNewApplicationData').then((AddNewApplicationData)=>{
                cy.get(AddNewApplicationLocators.SubmitInterface3_3).click()
                cy.wait(500)
                cy.get('h3').should('have.text',AddNewApplicationData.DataMsg)
                cy.get(AddNewApplicationLocators.SubmitInterface_3).click()
                cy.get(AddNewApplicationLocators.SubmitInterface3).should('have.text',AddNewApplicationData.ApplicationSubmittedMsg_2)
                cy.get(AddNewApplicationLocators.SaveProgressInterface3).click()
                cy.get('h3').should('have.text',AddNewApplicationData.DataMsg)
                cy.get(AddNewApplicationLocators.SubmitInterface4).click()
                cy.get(AddNewApplicationLocators.MsgConfirmationInterface4).should('have.text',AddNewApplicationData.ApplicationSubmittedMsg_1)
            })
        })
    }

}
export default FillFormsApplication;