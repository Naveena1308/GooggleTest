Feature: Mail compose feature
   Basic mail compose testcripts are available here
   
    Scenario: I verify the basic compose mail faeture from gmail
    Given I visit the Gmail url
    Then I click the compose button and enter values
    And I verify formatting options
    And I verify clear recipients in compose mail
    And I verify with invalid mail ID
    And I verify attachments "uploadQuotation.xlsx" in compose
   