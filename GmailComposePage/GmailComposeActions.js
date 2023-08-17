/// <reference types="cypress" />


class GmailComposeActions {

    VisitGmail(){
        cy.visit('https://gmail.com');
        
    }
    enterValues(){
        cy.contains('compose-button').click();
        cy.get('#to').type('recipient123@email.com');
        cy.contains ('subject').type('Interview assessment');
        cy.xpath("//div[@class='Am Al editable LW-avf tS-tW']’).type(Hi,Naveena here!");
        cy.get('#send').click();
    }
    formattingOptions(){
        cy.get('#compose-button').click();
    // Bold
    cy.get('#format-button').click();
    cy.get('#bold-button').click();
    cy.get('#body').should('have.css', 'text-decoration', 'BOLD');

    // Italic
    cy.get('#format-button').click();
    cy.get('#italic-button').click();
    cy.get('#body').should('have.css', 'font-style', 'italic');

    // Underline
    cy.get('#format-button').click();
    cy.get('#underline-button').click();
    cy.get('#body').should('have.css', 'text-decoration', 'underline');

    // Strikethrough
    cy.get('#format-button').click();
    cy.get('#strikethrough-button').click();
    cy.get('#body').should('have.css', 'text-decoration', 'line-through');

    // Font size
    cy.get('#format-button').click();
    cy.get('#fontsize-select').select('16px');
    cy.get('#body').should('have.css', 'font-size', '16px');

    // Font color
    cy.get('#format-button').click();
    cy.get('#color-picker').click();
    cy.get('#color-wheel').click({ x: 200, y: 200 });
    cy.get('#body').should('have.css', 'color', '#ff0000');
    }
      
    clearRecipients(){
        cy.get('#compose-button').click();
    cy.get('#to').type('recipient@email.com');

    // Clear the recipient field
    cy.get('#to').clear();

    // Verify that the recipient field is empty
    cy.get('#to').should('have.value', '');

    }

    invalidMailID(){
        cy.get('#compose-button').click();
    cy.get('#to').type('invalid_email_address');

    // Try to send the email
    cy.get('#send').click();

    // Verify that the error message is dispalyed
    cy.get('#to-field').should('have.text', 'Please enter a valid email address.');
    }

    attachment(){
        cy.get('#compose-button').click();
        cy.get('#file-input').attachFile({ filePath: fileName });
    cy.wait(5000)

    }

}
export default GmailComposeActions;