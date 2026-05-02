describe('Handling All types of Dropdown', () => {

  it('handle search bar amazon dropdown', () => {

    cy.visit('https://www.amazon.in/');

    cy.get('#twotabsearchtextbox')
      .type("iphone 17 pro");

    cy.contains('.left-pane-results-container div', 'iphone 17 pro case')
      .click();
 
  });

});