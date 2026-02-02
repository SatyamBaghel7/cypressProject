Cypress.Commands.add('goToApplication',()=>{
    const url = Cypress.env('applicationUrl')
    cy.visit(url);
})