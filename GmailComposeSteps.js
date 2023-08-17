import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import GmailComposePage from "../../e2e/pageObjects/GmailComposePage/GmailComposeActions"

const composeFeature = new GmailComposePage();

When('I visit the Gmail url', () => {
    composeFeature.VisitGmail()
  });

  When('I click the compose button and enter values', () => {
    composeFeature.enterValues()
  });

  When('I verify formatting options', () => {
    composeFeature.formattingOptions()
  });

  When('I verify clear recipients in compose mail', () => {
    composeFeature.clearRecipients()
  });

  When('I verify with invalid mail ID', () => {
    composeFeature.invalidMailID()
  });

  When('I verify attachments {string} in compose', (fileName) => {
    composeFeature.attachment(fileName)
  });
  