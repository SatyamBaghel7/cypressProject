import loginPage  from "../../support/pages/loginPage";
import Footer from "../../support/pages/components/Footer"; 
import Header from "../../support/pages/components/Header";

const login_credentials=require("../../fixtures/login_credentials.json");

describe('Sauce Demo', () => {
  beforeEach(() => {
    cy.goToApplication();
  })

  it('@regression @sanity Login with valid credentials,Validate that user is able to login', () => {
    loginPage.fillUsername(login_credentials.user);
    loginPage.fillPassword(login_credentials.password);
    loginPage.clickButton();

    cy.get('.title').should('have.text',"Products");
    Header.elements.header_id().should('have.text',"Swag Labs");
    Footer.elements.footer_id().should('include.text',' Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');

  })

   it('@regression Validate Google is launched', () => {
    cy.visit('https://www.google.com/');
    cy.title().should('eq','Google');
  })

    
  
})
